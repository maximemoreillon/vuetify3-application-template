<template>
  <v-form class="text-center" @submit.prevent="login()">
    <v-text-field
      prepend-icon="mdi-account"
      label="Username"
      v-model="userInput.identifier"
    />

    <v-text-field
      prepend-icon="mdi-lock"
      label="Password"
      type="Password"
      v-model="userInput.password"
    />

    <v-btn
      type="submit"
      :loading="logging_in"
      prepend-icon="mdi-login"
      color="primary"
    >
      Login
    </v-btn>
  </v-form>

  <v-snackbar :color="snackbar.color" v-model="snackbar.show">
    {{ snackbar.text }}
    <template v-slot:actions>
      <v-btn @click="snackbar.show = false" icon="mdi-close" />
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { state, actions } from "./templateStore";

import axios from "axios";
import VueCookies from "vue-cookies";

const userInput = reactive({
  identifier: "",
  password: "",
});

const snackbar = reactive({
  text: "",
  show: false,
  color: "error",
});

const logging_in = ref(false);

const login = async () => {
  // Exchange credentials for JWT

  const { login_url } = state.options;

  snackbar.show = false;
  logging_in.value = true;

  try {
    const { data } = await axios.post(login_url, userInput);
    const { jwt } = data;

    // TODO: Store jwt in either cookies or localstorage according to options
    // TODO: secure, samesite, expires etc
    // @ts-ignore
    VueCookies.set("jwt", jwt);

    await actions.getUser();
  } catch (error: any) {
    snackbar.show = true;
    snackbar.color = "error";

    if (error.response) {
      snackbar.text = error.response.data;
      console.error(error.response.data);
    } else {
      snackbar.text = `Error while logging in`;
      console.error(error);
    }
  } finally {
    logging_in.value = false;
  }
};
</script>
