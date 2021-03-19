<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" v-model="email" required />
    <input type="text" placeholder="password" v-model="password" required />
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // refs
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(displayName.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style>
</style>