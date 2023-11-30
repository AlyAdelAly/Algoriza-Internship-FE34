<template>
  <section
    class="w-full rounded-r-[6px] rounded-l-[6px] border border-light-gray bg-white"
  >
    <div class="bg-light p-[18px]">
      <h1 class="font-medium">Rating</h1>
    </div>

    <section class="space-y-[14px] p-[18px]">
      <p class="font-normal text-[14px] text-gray">
        Show only ratings more than
      </p>
      <div class="w-[250px] h-[46px] rounded-[5px] flex flex-nowrap">
        <div
          v-for="ratingNumber in 5"
          :key="ratingNumber"
          class="flex flex-nowrap justify-center items-center border-[#E0E0E0] border-[1px] w-[48px] h-[46px]"
          :title="`${ratingNumber} star${ratingNumber > 1 ? 's' : ''}`"
        >
          <p>{{ ratingNumber }}</p>
          <img
            class="w-[18px] h-[18px]"
            src="../../assets//Icons/star.svg"
            :alt="`${ratingNumber} star${ratingNumber > 1 ? 's' : ''}`"
          />
        </div>
      </div>
    </section>
  </section>
</template>
    
<script setup>

</script>
  
