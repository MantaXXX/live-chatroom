<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="display name"
      v-model="displayName"
      required
    />
    <input type="email" placeholder="email" v-model="email" required />
    <input type="text" placeholder="password" v-model="password" required />
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  setup() {
    const { error, signup } = useSignup();
    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
    };

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style>
</style>