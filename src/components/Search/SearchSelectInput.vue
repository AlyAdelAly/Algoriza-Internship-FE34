<template>
    <div class="relative flex items-center">
        <img
          src="../../assets/Icons/location 1.svg"
          alt="Location Icon"
          class="absolute ml-1 pointer-events-none"
        />
        <select name="destination" id=""
                class="w-[180px] pl-6 py-2 text-gray rounded-md bg-light border border-light focus:border-light-blue focus:outline-none" required>
                <option value="option" disabled selected hidden>Where do you want to go?</option>
                <option value="cairo">Cairo</option>
                <option value="alex">Alex</option>
                <option value="giza">Giza</option>
                <option value="asyut">Asyut</option>
            </select>
      </div>
</template>

<script setup>

</script>