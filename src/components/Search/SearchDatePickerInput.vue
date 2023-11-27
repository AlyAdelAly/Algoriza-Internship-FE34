<template>
  <div class="flex items-center">
    <VueDatePicker
      v-model="date"
      @update:model-value="emits('selectedDate', date)"
      :min-date="props.minDate"
      :placeholder="props.placeholder"
      :enable-time-picker="false"
      input-class-name="dp-custom-input"
      
    >
      <template #input-icon>
        <img
          class="ml-1"
          src="../../assets/Icons/calendar 1.svg"
          alt="Calendar Icon"
        />
      </template>
    </VueDatePicker>
  </div>
</template>
  
<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import {ref} from 'vue'

const props = defineProps({
  placeholder: String,
  minDate: Date
});

let emits = defineEmits(["selectedDate"]);

let date = ref()

</script>

<style lang="css">
.dp-custom-input {
  background-color: #f2f2f2;
  width: 147px;
  border-radius: 4px;
  border: none;
  font-size: 13px;
}
</style>