<template>
  <div class="flex items-center">
    <VueDatePicker
      :model-value="modelValue"
      @update:model-value="updateSelectedDate"
      :min-date="minDate"
      :max-date="maxDate"
      :placeholder="props.placeholder"
      :enable-time-picker="false"
      input-class-name="dp-custom-input"
      required 
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
  'modelValue': Date,
  'placeholder': String,
  'minDate': Date,
  'maxDate': Date
});

let emits = defineEmits(["update:modelValue"]);

const updateSelectedDate = (value) => {
  emits('update:modelValue', value)
}

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