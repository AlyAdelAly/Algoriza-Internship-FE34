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
        <h2 class="font-semibold text-light-black text-2xl">Loading...</h2>
        <div class="w-[190px] space-y-0 rounded-[6px] border border-[#BDBDBD] px-3 py-1 pr-0 focus-within:border-light-blue">
          <label for="sortBy" class="block text-sm font-medium text-gray">
            Sort by
          </label>
          <SortByOptions />
        </div>
        
      </div>
    </div>
  </main>
</template>

<script setup>
import Search from "../../components/Search/Search.vue";
import FilterByName from "./FilterByName.vue";
import FilterByPrice from "./FilterByPrice.vue";
import FilterByRating from "./FilterByRating.vue";
import SortByOptions from "./SortByOptions.vue";

</script>
