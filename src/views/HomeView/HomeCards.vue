<template>
    <section class="mt-14">
      <div>
        <h2 class="text-black text-3xl font-semibold">
          {{ props.heading }}
        </h2>
        <p class="text-gray pt-4 w-[400px] md:w-[610px]">
          {{ props.description }}
        </p>
      </div>
      <div
        class="mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
      >
        <div v-for="item in props.cards" :key="`${item.name}`">
            <HomeCardItem :card-item="item" />
        </div>
      </div>
    </section>
</template>

<script setup>
import HomeCardItem from './HomeCardItem.vue';

const props = defineProps({
    cards: Array,
    heading: String,
    description: String
})

</script>