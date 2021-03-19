<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import getUser from "../composables/getUser";
import NewChatForm from "../components/NewChatForm.vue";
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { Navbar, NewChatForm },

  setup() {
    const { user } = getUser();
    const router = useRouter();

    // watch user status and redirect the route
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
</style>