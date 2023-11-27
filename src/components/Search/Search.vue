<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white w-[1030px] h-16 rounded-lg shadow-lg mx-auto"
  >
    <div
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 space-x-8 text-sm text-gray"
    >
      <SearchSelectInput />
      <SearchDatePicker
        placeholder="Check in date"
        :min-date="minCheckInDate"
        @selectedDate="setSelectedDate"
      />
      <SearchDatePicker
        placeholder="Check out date"
        :min-date="minCheckOutDate"
      />
      <SearchTextInput
        placeholder="Guests"
        srcImg="user-square1.svg"
        alt="User Icon"
      />
      <SearchTextInput
        placeholder="Rooms"
        srcImg="single-bed1.svg"
        alt="Bed Icon"
      />
      <SearchButton />
    </div>
  </form>
</template>

<script setup>
import SearchDatePicker from "./SearchDatePickerInput.vue";
import SearchSelectInput from "./SearchSelectInput.vue";
import SearchTextInput from "./SearchTextInput.vue";
import SearchButton from "./SearchButton.vue";
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../../stores/authStore";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

let currentDate = ref(new Date());
let checkInDate = ref(currentDate);
let minCheckInDate = ref(
  new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    currentDate.value.getDate() + 1
  )
);
let minCheckOutDate = computed(() => {
  return new Date(
    checkInDate.value.getFullYear(),
    checkInDate.value.getMonth(),
    checkInDate.value.getDate() + 1
  );
});

const setSelectedDate = (date) => {
  currentDate.value = date;
};

const handleSubmit = () => {
  if (authStore.isAuthenticated) {
    if (!authStore.isTokenExpired)
      if (route.name === "Home") router.push({ name: "Hotel Results" });
  } else {
    router.push({ name: "Login" });
  }
};
</script>