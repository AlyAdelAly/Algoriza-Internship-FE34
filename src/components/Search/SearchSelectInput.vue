<template>
  <div class="relative flex items-center">
        <img
          src="../../assets/Icons/location 1.svg"
          alt="Location Icon"
          class="absolute ml-1 pointer-events-none"
        />
        <select name="location" id="location" :modelValue ="modelValue" @change="updateSelectedInput"
                class="w-[180px] text-[13px] pl-6 py-2 text-gray rounded-md bg-light border border-light focus:border-light-blue focus:outline-none" required>
                <option value="" selected hidden>Where do you want to go?</option>
                <option v-for="city in cities" :key="city.dest_id" :value="city.dest_id">{{ city.city_name }}</option>
            </select>
      </div>
</template>

<script setup>
import { ref , onMounted, reactive} from 'vue'
import {searchHotelDestination} from '../../utils/api'

const props = defineProps({
  modelValue : String
})

const emits = defineEmits(['update:modelValue'])

let cities = ref([])

const getCities = () => {
    searchHotelDestination().then(res => {
      const citiesList = res.data.data
      const filteredCities = citiesList.filter((city) => city.search_type === 'city')
      cities.value = filteredCities
    })
}

const updateSelectedInput = (e) => {
    emits('update:modelValue', e.target.value)
}

onMounted(() => {
 getCities()
})

</script>