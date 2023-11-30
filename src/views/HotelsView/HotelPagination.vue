<template>
  <div class="mt-14 flex items-center justify-center">
    <button
      class="bg-white cursor-pointer mt-2"
      @click="moveToPage(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      <img src="../../assets//Icons/arrow-left.svg" />
    </button>
    <template v-for="page in displayPages" :key="page">
      <button
        @click="moveToPage(page)"
        :class="[`w-10 h-10 flex items-center justify-center rounded-[6px] hover:text-white hover:bg-light-blue py-2  ${updateStyleActiveButton(page)}`]"
      >
        {{ page }}
      </button>
    </template>
    <button
      class="bg-white cursor-pointer mt-2"
      @click="moveToPage(currentPage + 1)"
      :disabled="currentPage === numOfTotalPages"
    >
      <img src="../../assets//Icons/arrow-right.svg" />
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  isDataUpdated: Function,
  currentPage: Number,
  numOfTotalPages: Number,
  assignCurrentPage: Function,
});

const displayPages = computed(() => {
  let result = [];

  if (props.numOfTotalPages <= 10) {
    result = Array.from(
      { length: props.numOfTotalPages },
      (_, index) => index + 1
    );
  } else {
    const start = Math.max(1, props.currentPage - 2);
    const end = Math.min(props.currentPage + 2, props.numOfTotalPages);

    result = Array.from(
      { length: end - start + 1 },
      (_, index) => start + index
    );
  }
  return result;
});

const updateStyleActiveButton = ((page) => props.currentPage === page ? 'bg-light-blue text-white' : 'bg-white text-[#9E9E9E]')

const moveToPage = async (numOfPage) => {
  props.assignCurrentPage(numOfPage);
  let searchFieldsValue = JSON.parse(localStorage.getItem("SearchFieldsValue"));
  let updatedSearchFields = {
    ...searchFieldsValue,
    search_type: "CITY",
    page_number: numOfPage.toString(),
  };
  localStorage.setItem(
    "SearchFieldsValue",
    JSON.stringify(updatedSearchFields)
  );
  props.isDataUpdated();
};
</script>
