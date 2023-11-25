<template>
  <div class="flex items-center">
    <VueDatePicker
      v-model="date"
      :min-date="new Date() + 1"
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
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const props = defineProps({
  'placeholder': String
})

let emits = defineEmits(['dateSelected'])

let date = ref(new Date());

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