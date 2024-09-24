<template>
  <h1>Home</h1>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque
    omnis labore dolore, quibusdam suscipit. Debitis at culpa in magni ex et,
    voluptate doloribus laudantium dignissimos beatae numquam fuga omnis.
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque
    omnis labore dolore, quibusdam suscipit. Debitis at culpa in magni ex et,
    voluptate doloribus laudantium dignissimos beatae numquam fuga omnis.
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque
    omnis labore dolore, quibusdam suscipit. Debitis at culpa in magni ex et,
    voluptate doloribus laudantium dignissimos beatae numquam fuga omnis.
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque
    omnis labore dolore, quibusdam suscipit. Debitis at culpa in magni ex et,
    voluptate doloribus laudantium dignissimos beatae numquam fuga omnis.
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque
    omnis labore dolore, quibusdam suscipit. Debitis at culpa in magni ex et,
    voluptate doloribus laudantium dignissimos beatae numquam fuga omnis.
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque
    omnis labore dolore, quibusdam suscipit. Debitis at culpa in magni ex et,
    voluptate doloribus laudantium dignissimos beatae numquam fuga omnis.
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque
    omnis labore dolore, quibusdam suscipit. Debitis at culpa in magni ex et,
    voluptate doloribus laudantium dignissimos beatae numquam fuga omnis.
  </p>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted } from "vue";

onMounted(async () => {
  try {
    const { data } = await axios.get("http://192.168.1.2:7070");
    console.log(data);
  } catch (error: any) {
    console.error(error.response?.data);
  }
});
</script>
