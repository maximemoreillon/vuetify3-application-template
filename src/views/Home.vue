<template>
  <h1>Home</h1>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted } from "vue";

onMounted(async () => {
  const { data } = await axios.get(
    "https://api.users.maximemoreillon.com/users/self"
  );
  console.log(data);
});
</script>
