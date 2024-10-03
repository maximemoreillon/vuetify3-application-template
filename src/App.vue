<template>
  <v-app>
    <AppTemplate :options="options" @user-changed="handleUserChanged($event)">
      <template v-slot:nav>
        <v-list>
          <v-list-item> Home </v-list-item>
        </v-list>
      </template>
    </AppTemplate>
  </v-app>
</template>

<script lang="ts" setup>
import AppTemplate from "@/AppTemplate.vue";
import { ref } from "vue";
import axios from "axios";

const options = ref({
  title: "Example application",
  author: "Maxime Moreillon",
  // login_url: "https://api.users.maximemoreillon.com/auth/login",
  // identification_url: "https://api.users.maximemoreillon.com/users/self",
  username_hint: "Test hint for username",
  password_hint: "Test hint for password",
  oidc: {
    authority: import.meta.env.VITE_OIDC_AUTHORITY,
    client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
    extraQueryParams: {
      audience: import.meta.env.VITE_OIDC_AUDIENCE,
    },
  },

  // footer: false,
});

function handleUserChanged({ user }: any) {
  console.log(user.access_token);
  if (user.access_token)
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.access_token}`;
  else axios.defaults.headers.common["Authorization"] = undefined;
}
</script>
