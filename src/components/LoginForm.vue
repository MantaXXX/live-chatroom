<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" v-model="email" required />
    <input type="text" placeholder="password" v-model="password" required />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  // pass context object to use $emit method
  setup(props, context) {
    // refs
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>