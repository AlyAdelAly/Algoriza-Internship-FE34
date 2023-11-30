<template>
  <button
    class="w-full bg-light-blue hover:bg-blue-700 text-white text-[15px] p-2 rounded-[6px]"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
