<template>
  <div class="relative flex items-center">
    <img
      :src="getIconPath(props.srcImg)"
      :alt="props.alt"
      class="absolute ml-2 pointer-events-none"
    />
    <input
      type="text"
      :placeholder="props.placeholder"
      class="w-full text-[14px] pl-8 py-2 text-gray rounded bg-white border border-light focus:border-light-blue focus:outline-none"
    />
  </div>
</template>
  
  <script setup>
import { getIconPath } from "../../helpers/getPath";

const props = defineProps({
  placeholder: String,
  srcImg: String,
  alt: String,
});
</script>
  