<template>
  <form
    @submit.prevent=""
    class="bg-white w-[1030px] h-16 rounded-lg shadow-lg mx-auto"
  >
    <div
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 space-x-8 text-sm text-gray"
    >
      <SearchSelectInput v-model="state.dest_id" />
      <SearchDatePicker
        v-model="state.arrival_date"
        placeholder="Check in date"
        :min-date="tomorrow"
        :max-date="maxCheckInDate"
      />
      <SearchDatePicker
        v-model="state.departure_date"
        placeholder="Check out date"
        :min-date="minCheckOutDate"
      />
      <SearchTextInput
        v-model="state.guests"
        placeholder="Guests"
        srcImg="user-square1.svg"
        alt="User Icon"
      />
      <SearchTextInput
        v-model="state.room_qty"
        placeholder="Rooms"
        srcImg="single-bed1.svg"
        alt="Bed Icon"
      />
      <SearchButton @click="handleSearch" />
    </div>
  </form>
</template>

<script setup>
import SearchDatePicker from "./SearchDatePickerInput.vue";
import SearchSelectInput from "./SearchSelectInput.vue";
import SearchTextInput from "./SearchTextInput.vue";
import SearchButton from "./SearchButton.vue";
import { ref, computed, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../../stores/authStore";
import { searchHotels } from "../../utils/api";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

let searchInputValue = JSON.parse(localStorage.getItem('SearchFieldsValue')) 


const state = reactive({
  dest_id: null,
  arrival_date: null,
  departure_date: null,
  guests: null,
  room_qty: null,
});

let currentDate = ref(new Date());
let tomorrow = new Date(
  currentDate.value.getFullYear(),
  currentDate.value.getMonth(),
  currentDate.value.getDate() + 1
);

let maxCheckInDate = computed(() => {
  if (!state.departure_date) {
    return;
  } else {
    return state.departure_date;
  }
});

let minCheckOutDate = computed(() => {
  let newArrivalDate =
    state.arrival_date &&
    new Date(
      state.arrival_date.getFullYear(),
      state.arrival_date.getMonth(),
      state.arrival_date.getDate() + 1
    );
  return newArrivalDate || tomorrow;
});

const handleSearch = async () => {

  let arrival_date = state.arrival_date && state.arrival_date.toISOString().split("T")[0];
  let departure_date = state.departure_date && state.departure_date.toISOString().split("T")[0];
  let searchFieldsValue = {...state,arrival_date,departure_date};
  localStorage.setItem("SearchFieldsValue", JSON.stringify(searchFieldsValue));


  if (authStore.isAuthenticated) {
    if (!authStore.isTokenExpired) {
      let res = await searchHotels({...state,arrival_date,departure_date});
      let data = await res.data;
      let HotelResults = data.data.hotels
      let MetaResults = data.data.meta
      localStorage.setItem('HotelResults', JSON.stringify({HotelResults}))
      localStorage.setItem('MetaResults', JSON.stringify({MetaResults}))
      if (route.name === "Home" && data) {
        router.push({ name: "Hotel Results" });
      }
    }
  } else {
    router.push({ name: "Login" });
  }

  onMounted(() => {
    console.log(searchInputValue)
  })
};
</script>