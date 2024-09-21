<template>
  <v-app>
    <AppTemplate :options="options">
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
const options = ref({
  title: "Example application",
  author: "Maxime Moreillon",
  // login_url: "https://api.users.maximemoreillon.com/auth/login",
  // identification_url: "https://api.users.maximemoreillon.com/users/self",
  username_hint: "Test hint for username",
  password_hint: "Test hint for password",
  oidc_authority: import.meta.env.VITE_OIDC_AUTHORITY,
  oidc_client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
  // footer: false,
});
</script>
