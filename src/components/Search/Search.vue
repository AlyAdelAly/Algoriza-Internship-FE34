<template>
  <form
    @submit.prevent="submitForm"
    class="bg-white w[700px] md:w-[550px] lg:w-[1030px] h-16 rounded-lg shadow-lg mx-auto"
  >
    <div
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 space-x-8 text-sm text-gray"
    >
      <SearchSelectInput />
      <SearchDatePicker placeholder="Check in date" />
      <SearchDatePicker placeholder="Check out date" />
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
</script>