<template>
  <div>
    <img
      :src="getImagePath(cardItem.img)"
      :alt="`${props.cardItem.name}`"
      class="w-full h-56 rounded-lg"
    />
    <h4 class="pt-2 text-xl font-semibold">{{ props.cardItem.name }}</h4>
    <p>{{ props.cardItem.description }}</p>
  </div>
</template>

<script setup>
import { getImagePath } from '../../helpers/getPath';
const props = defineProps({ 'cardItem': Object });
</script>
