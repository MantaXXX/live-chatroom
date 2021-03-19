<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import useCollection from "../composables/useCollection";
import getUser from "../composables/getUser";
import { timestamp } from "../firebase/config";
import { ref } from "vue";

export default {
  setup() {
    const { user } = getUser();
    // use the collection name: "messages"
    const { error, addDoc } = useCollection("messages");

    const message = ref("");

    const handleSubmit = async () => {
      // chat object to record name, message and timestamp
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };
    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>