<template>
  <div class="relative flex items-center">
    <img
      :src="getIconPath(props.srcImg)"
      :alt="props.alt"
      class="absolute ml-1 pointer-events-none bg-light"
    />
    <input
      type="text"
      :placeholder="props.placeholder"
      :modelValue="modelValue"
      @input="updateInput"
      class="w-[147px] pl-8 py-2 text-gray rounded-md bg-light border border-light focus:border-light-blue focus:outline-none"
    />
  </div>
</template>

<script setup>
import {getIconPath} from '../../helpers/getPath'

const props = defineProps({
    placeholder: String,
    modelValue: String,
    srcImg: String,
    alt: String
})

const emits = defineEmits(['update:modelValue'])

const updateInput = (e) => {
    emits('update:modelValue', e.target.value)
}
</script>

