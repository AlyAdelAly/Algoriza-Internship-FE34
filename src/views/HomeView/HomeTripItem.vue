<template>
  <div class="relative">
    <div class="relative">
      <img
        :src="getImagePath(trip.img)"
        :alt="`${props.trip.alt}`"
        class="w-full h-[280px] object-cover rounded-lg"
      />
      <div
        class="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-[280px] rounded-lg"
      ></div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
      <h2 class="text-lg font-semibold">
        {{ props.trip.title }}
      </h2>
      <p class="text-sm pt-6 font-normal">
        {{ props.trip.description}}
      </p>
    </div>
  </div>
</template>

<script setup>
import { getImagePath } from '../../helpers/getPath';
const props = defineProps({ 'trip': Object });

</script>