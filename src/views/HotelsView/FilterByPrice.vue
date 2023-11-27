<template>
  <section
    class="w-full rounded-r-[6px] rounded-l-[6px] border border-light-gray bg-white"
  >
    <div class="bg-light p-[18px]">
      <h1 class="font-medium">
        Your budget per day: {{ selectedBudgetRange }}
      </h1>
    </div>

    <section class="space-y-[14px] p-[18px]">
      <div v-if="!isMinMaxEnabled" class="space-y-[14px]">
        <label
          class="block w-full align-text-bottom text-sm font-normal"
          v-for="budget in budgetRanges"
          :key="budget.value"
        >
          <input
            type="checkbox"
            name="budget"
            :value="budget.value"
            class="mr-2 rounded border-gray-400 outline-none checked:ring-light-blue focus:light-blue active:light-blue"
            :checked="selectedBudgetRange === budget.value"
            @click="handleBudgetChange(budget.value)"
          />
          {{ budget.label }}
        </label>
      </div>
      <div class="flex justify-between">
        <p class="font-normal text-[14px] text-gray">Set you own budget</p>
        <label class="flex items-center justify-center cursor-pointer">
          <div class="relative">
            <input type="checkbox" class="hidden" v-model="isMinMaxEnabled" />
            <div
              class="toggle__line w-10 h-4 bg-[#BDBDBD] rounded-full shadow-inner"
            ></div>
            <div
              class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow-md -top-[5px] left-0"
            ></div>
          </div>
        </label>
      </div>
      <div v-if="isMinMaxEnabled" class="mt-4 flex justify-between gap-6">
        <input
          type="number"
          placeholder="Min budget"
          v-model="minValue"
          class="w-full border border-light-gray p-[11px] rounded focus:border-light-blue focus:outline-none text-[12px]"
        />
        <input
          type="number"
          placeholder="Max budget"
          v-model="maxValue"
          class="w-full border border-light-gray p-[11px] rounded focus:border-light-blue focus:outline-none text-[12px]"
        />
      </div>
    </section>
  </section>
</template>
  
<script setup>
import { ref } from "vue";

const emit = defineEmits(["priceChange"]);

const isMinMaxEnabled = ref(false);
const minValue = ref();
const maxValue = ref();

const selectedBudgetRange = ref("");

const budgetRanges = [
  {
    value: "0-200",
    label: "$0 - $200",
  },
  {
    value: "200-500",
    label: "$200 - $500",
  },
  {
    value: "500-1000",
    label: "$500 - $1000",
  },
  {
    value: "1000-2000",
    label: "$1000 - $2000",
  },
  {
    value: "2000-5000",
    label: "$2000 - $5000",
  },
];

const handleBudgetChange = (value) => {
  if (selectedBudgetRange.value === value) {
    selectedBudgetRange.value = "";
  } else {
    selectedBudgetRange.value = value;
  }
  emit("priceChange", selectedBudgetRange.value);
};
</script>

<style scoped>
/* Add any custom styles here */
.toggle__line {
  transition: background-color 0.3s;
}

.toggle__dot {
  transition: left 0.3s;
}

input:checked + .toggle__line {
  background-color: #2f80ed;
}

input:checked + .toggle__line + .toggle__dot {
  left: calc(100% - 1.5rem);
}
</style>