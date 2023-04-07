<template>
  <v-main>
    <v-card flat max-width="30rem" class="mx-auto mt-10">
      <v-card-text>
        <v-row justify="center">
          <v-col cols="auto">
            <!-- TODO: use image from assets -->
            <img
              v-if="state.options.logo"
              :src="state.options.logo"
              class="logo"
            />
            <img v-else class="logo rotating_logo" src="@/assets/logo.png" />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <v-card-title>
              {{ state.options.title }}
            </v-card-title>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-progress-linear
              indeterminate
              color="primary"
              v-if="state.authenticating"
            />
            <LoginForm v-else-if="!state.user" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script setup lang="ts">
import { state, actions } from "./templateStore";

import LoginForm from "./LoginForm.vue";

const { getUser } = actions;

getUser();
</script>

<style scoped>
/* .main {
  display: flex;
  justify-content: center;
  align-items: center;
} */
img {
  width: 20vmin;
  height: 20vmin;
  object-fit: contain;
}
@keyframes rotating_logo {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
