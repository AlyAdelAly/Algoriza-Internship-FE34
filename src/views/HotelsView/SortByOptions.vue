<template>
  <div class="w-[190px]">
    <Listbox v-model="selectedOption" @update:model-value ="handleSortByChange" >
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-40 -ml-3 cursor-default bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-light-blue focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-light-blue sm:text-sm"
        >
          <span class="block truncate">{{ selectedOption }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <img src="../../assets//Icons/arrow-down 1.svg" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-2 -ml-3 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="option in options"
              :key="option.id"
              :value="option.id"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-blue-200 text-light-black' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-3 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ option.title }}</span
                >
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
  
  <script setup>
import { onMounted, ref } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { getSortBy } from "../../utils/api";

const props = defineProps({
  isDataUpdated: Function
})

let getSearchFields = localStorage.getItem("SearchFieldsValue");
let parsedGetSearchFields = JSON.parse(getSearchFields);

let selectedOption = ref(null);

let options = ref([]);

const sortByOptions = async () => {
  try {
    let res = await getSortBy({...parsedGetSearchFields,search_type: "CITY"});
    let data = await res.data;
    options.value = data.data;
  } catch (err) {
    console.log(err);
  }
};

const handleSortByChange = async(value) => { 
  let sortByQuery = value
  let searchFieldsValue = JSON.parse(localStorage.getItem('SearchFieldsValue'))
  let updatedSearchFields = {...searchFieldsValue,search_type: 'CITY', page_number: '1', sort_by: sortByQuery}
  localStorage.setItem('SearchFieldsValue', JSON.stringify(updatedSearchFields))
  props.isDataUpdated()
}

onMounted(() => {
  sortByOptions();
});
</script>
  