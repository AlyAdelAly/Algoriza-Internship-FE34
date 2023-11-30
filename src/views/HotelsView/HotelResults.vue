<template>
  <header class="relative -top-20 -z-10">
    <div
      class="w-full h-[200px] bg-gradient-to-b from-[#2969BF] to-[#144E9D]"
    ></div>
  </header>

  <Search class="relative -top-28" />

  <main
    class="container mx-auto flex flex-col justify-between gap-8 px-4 lg:flex-row lg:px-24"
  >
    <aside class="flex flex-col gap-6 w-1/4">
      <div class="w-full rounded-md bg-light p-5">
        <h4 class="mb-4 text-base font-medium text-light-black">
          Search by property name
        </h4>
        <FilterByName
          placeholder="Search"
          srcImg="search 1.svg"
          alt="Search Icon"
        />
      </div>
      <div class="w-full">
        <h4 class="mb-4 text-lg font-semibold text-dark-gray">Filter by</h4>
        <FilterByPrice />
      </div>

      <FilterByRating />
    </aside>

    <div class="w-3/4">
      <div class="flex items-start justify-between">
        <h2
          class="font-semibold text-light-black text-2xl"
          v-if="isHotelResultsLoading"
        >
          Loading...
        </h2>
        <h2 class="font-semibold text-light-black text-2xl" v-else>
          {{ hotelResultsData[0] && hotelResultsData[0].property.wishlistName }}
          : {{ numOfProperties }} search results found
        </h2>
        <div
          class="w-[190px] space-y-0 rounded-[6px] border border-[#BDBDBD] px-3 py-1 pr-0 focus-within:border-light-blue"
        >
          <label for="sortBy" class="block text-sm font-medium text-gray">
            Sort by
          </label>
          <SortByOptions :isDataUpdated="isDataUpdated" />
        </div>
      </div>

      <div
        v-if="isHotelResultsLoading"
        class="flex items-center justify-center my-20"
      >
        <LoadingSpinnerVue />
      </div>

      <div v-else>
        <div
          v-for="hotel in hotelResultsData"
          :key="hotel.hotel_id"
          class="w-full border border-light-gray rounded-[5px] mt-6"
        >
          <div class="flex flex-row justify-between p-5 gap-5">
            <figure class="rounded-[5px] w-[285px] h-[200px]">
              <img
                :src="hotel.property.photoUrls[0]"
                alt=""
                class="w-full h-full rounded-[5px]"
              />
            </figure>
            <div class="flex flex-col w-[550px] h-[200px]">
              <div class="flex flex-row justify-between items-center h-[32px]">
                <h2
                  class="text-[#1A1A1A] text-[20px] font-medium leading-normal w-fit max-w-[350px]"
                >
                  {{ hotel.property.name }}
                </h2>
                <p
                  v-if="
                    strikethroughPrice(hotel) && benefitBadges(hotel) !== ''
                  "
                  class="inline-flex justify-center text-[13px] font-medium leading-[18px] text-white bg-[#EB5757] rounded-[6px] px-2 py-1 items-center"
                >
                  {{ benefitBadges(hotel) }}
                </p>
              </div>

              <div class="flex flex-start mt-3">
                <figure v-for="count in reviewScore(hotel)" :key="count">
                  <img src="../../assets/Icons/star.svg" alt="Star Review" />
                </figure>
                <p class="text-[14px] font-normal text-gray w-[120px] h-5 pl-2">
                  {{ reviewScore(hotel) }} ({{ reviewCount(hotel) }} Reviews)
                </p>
              </div>

              <div class="flex justify-between mt-[17px]">
                <div
                  class="flex flex-col justify-between text-[13px] text-gray"
                >
                  <h2 class="font-semibold text-lg w-[380px] h-[18px]">
                    {{ reviewScoreWord(hotel) || "Good" }}
                  </h2>
                  <p class="w-[380px] h-[36px] font-normal pt-2 leading-[19px]">
                    {{ accessibilityLabel(hotel) }}
                  </p>
                </div>
                <div
                  v-if="calacDiscount(hotel) !== 0"
                  class="h-[26px] inline-flex items-center py-1 px-2 justify-center gap-[10px] rounded-[6px] bg-[#219653] text-white font-medium text-sm leading-[18px]"
                >
                  {{ calacDiscount(hotel) }}% off
                </div>
              </div>

              <div class="flex justify-between mt-[18px]">
                <button
                  class="w-fit rounded-[6px] text-[15px] bg-light-blue text-white font-medium leading-5 px-[18px] py-[10px]"
                  @click="router.push({name:'Hotel Details', params:{id:hotel.hotel_id}})"
                >
                  See availability
                </button>
                <div class="flex flex-col items-end">
                  <div
                    :class="`flex w-fit items-center ${
                      strikethroughPrice(hotel) === 0
                        ? 'justify-end'
                        : 'justify-between'
                    }`"
                  >
                    <div v-if="strikethroughPrice(hotel) !== 0">
                      <span
                        class="text-[14px] font-medium line-through text-right text-[#EB5757] h-[17px] pr-2"
                      >
                        ${{ strikethroughPrice(hotel) }}
                      </span>
                    </div>
                    <div class="text-xl h-6 font-medium text-right">
                      ${{ grossPrice(hotel) }}
                    </div>
                  </div>
                  <p
                    class="text-right font-light text-[#333] text-[14px] h-[17px] pt-[6px]"
                  >
                    Includes taxes and fees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HotelPagination
        
        :assignCurrentPage="assignCurrentPage"
        :currentPage="currentPage"
        :numOfTotalPages="numOfTotalPages"
        :isDataUpdated="isDataUpdated"
      />
    </div>
  </main>

  <section class="container mt-24">
        <AlertMessage />
    </section>
</template>

<script setup>
import Search from "../../components/Search/Search.vue";
import FilterByName from "./FilterByName.vue";
import FilterByPrice from "./FilterByPrice.vue";
import FilterByRating from "./FilterByRating.vue";
import SortByOptions from "./SortByOptions.vue";
import HotelPagination from "./HotelPagination.vue";
import LoadingSpinnerVue from "../../components/Layout/LoadingSpinner.vue";
import AlertMessage from "../../components/Layout/AlertMessage.vue";
import { getHotelResultsFromLocalStorage } from "../../helpers/getHotelResults";
import { getHotelMetaDataFromLocalStorage } from "../../helpers/getHotelResults";
import { searchHotels } from "../../utils/api";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

let router = useRouter()

let setDataUpdated = ref(false);
let isDataUpdated = () => (setDataUpdated.value = true);

let isHotelResultsLoading = ref(false);

let searchFields = ref({});
let currentPage = ref();
let numOfTotalPages = ref();

let assignCurrentPage = (numOfPage) => {
  currentPage.value = numOfPage;
};

// get array of hotel results from local storage that saved in 'HotelResults' object
let hotelResultsObject = getHotelResultsFromLocalStorage();

let metaRsultsObject = getHotelMetaDataFromLocalStorage();

// access the array of hotel results
// let hotelResultsData = hotelResultsObject.HotelResults
let hotelResultsData = ref([]);

let metaResultsData = metaRsultsObject.MetaResults;
// let metaResultsData = ref([])
let numOfProperties = parseInt(metaResultsData[0].title.match(/\d+/)[0], 10);

// formats the accessibility label by removing dots and truncating to a maximum of 130 characters.
let accessibilityLabel = (data) => {
  let descriptionLabel = data.accessibilityLabel.split(".").join(" ");
  return descriptionLabel.length > 130
    ? descriptionLabel.substring(0, 130) + "...."
    : descriptionLabel;
};

// information about hotel prices
let grossPrice = (data) =>
  Math.ceil(data.property.priceBreakdown.grossPrice.value);
let strikethroughPrice = (data) => {
  if (data.property.priceBreakdown.strikethroughPrice) {
    return Math.round(data.property.priceBreakdown.strikethroughPrice.value);
  } else {
    return 0;
  }
};
let benefitBadges = (data) => {
  return data.property.priceBreakdown.benefitBadges.length
    ? data.property.priceBreakdown.benefitBadges[0].text
    : "";
};

let calacDiscount = (data) =>
  strikethroughPrice(data) !== 0
    ? Math.round(
        ((strikethroughPrice(data) - grossPrice(data)) /
          strikethroughPrice(data)) *
          100
      )
    : 0;

// information about hotel reviews
let reviewCount = (data) => data.property.reviewCount;
let reviewScore = (data) => Math.round(data.property.reviewScore / 2);
let reviewScoreWord = (data) => data.property.reviewScoreWord;

const saveHotelsDataAndSearchFieldsToLocalStorage = async () => {
  searchFields = JSON.parse(localStorage.getItem("SearchFieldsValue"));
  isHotelResultsLoading.value = true;
  let res = await searchHotels(searchFields);
  let data = await res.data;
  let hotelResults = data.data.hotels;
  if (hotelResults) {
    isHotelResultsLoading.value = false;
  }
  hotelResultsData.value = data.data.hotels;
  metaResultsData.value = data.data.meta;
  let hotelsDataToSetInLocalStorage = JSON.stringify(hotelResults);
  localStorage.setItem("HotelResults", hotelsDataToSetInLocalStorage);
};

onMounted(() => {
  saveHotelsDataAndSearchFieldsToLocalStorage();

  searchFields.value = JSON.parse(localStorage.getItem("SearchFieldsValue"));
  currentPage.value = parseInt(searchFields.value.page_number) || '1';
  let metaData = metaRsultsObject.MetaResults;
  console.log(metaData.length)
  if (metaData.length) {
    numOfTotalPages.value = Math.ceil(
      parseInt(metaData[0].title.match(/\d+/)[0], 10) / 20
    );
    console.log(numOfTotalPages.value)
  } else {
    return 1;
  }
});

watch(setDataUpdated, () => {
  if (setDataUpdated.value === true) {
    saveHotelsDataAndSearchFieldsToLocalStorage();

    setDataUpdated.value = false;
  }
});
</script>
