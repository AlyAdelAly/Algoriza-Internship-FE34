<template>
  <div class="mt-10 flex flex-col items-center justify-center">
    <form @submit.prevent="authSubmitForm" class="max-w-md w-full bg-white p-8">
      <h2 class="text-[28px] font-semibold mb-6 text-center">Sign In</h2>
      <div class="mb-2">
        <label
          for="email"
          class="block text-light-black text-[14px] font-medium"
          >Email address</label
        >
        <input
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          class="mt-1 p-2 w-full rounded-md bg-light-gray border border-light focus:border-light-blue focus:outline-none"
        />
      </div>
      <p v-if="v$.email.$error" class="text-red-600 mb-2">
        {{ v$.email.$errors[0].$message }}
      </p>
      <div class="relative mb-2">
        <label
          for="password"
          class="block text-light-black text-[14px] font-medium"
          >Password</label
        >
        <input
          v-model="formData.password"
          :type="showPassword ? 'text' : 'password'"
          id="password"
          name="password"
          class="mt-1 p-2 w-full rounded-md bg-light-gray border border-light focus:border-light-blue focus:outline-none"
        />
        <button
          @click="showPassword = !showPassword"
          class="absolute bottom-3 right-2"
          type="button"
        >
          <img src="../assets/Icons/eye 1.svg" alt="Eye Icon" />
        </button>
      </div>
      <p v-if="v$.password.$error" class="text-red-600 mb-3">
        {{ v$.password.$errors[0].$message }}
      </p>
      <DefaultButton :text="'Login'" />
      <div class="pt-5 text-center">
        <p>
          Don’t have an account? <span class="text-light-blue">Register</span>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import DefaultButton from "../UI/DefaultButton.vue";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { useAuthStore } from "../stores/authStore";


let showPassword = ref(false);
const authStore = useAuthStore();

const router =  useRouter();

const formData = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      containsPasswordRequirement: helpers.withMessage(
        () =>
          "The password requires an uppercase, lowercase, number and special character",
        (value) =>
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(
            value.toString()
          )
      ),
    },
  };
});

const v$ = useVuelidate(rules, formData);


const authSubmitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect) {
    authStore.signIn()
    router.push({name: 'Home'})
  }
};

</script>
