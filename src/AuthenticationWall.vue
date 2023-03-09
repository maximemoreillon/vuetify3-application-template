<template>
  <v-main class="bg-grey-lighten-4 main">
    <!-- Adding padding for consistent white spaces -->
    <v-card width="30rem" class="pa-0">
      <v-card-text>
        <v-row justify="center">
          <v-col cols="5">
            <!-- TODO: use image from assets -->
            <v-img
              :class="{ rotating_logo: !state.options.logo }"
              :src="
                state.options.logo ||
                'https://cdn.maximemoreillon.com/logo/thick/logo.png'
              "
            />
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

<script setup>
import { state, actions } from "./templateStore";

import LoginForm from "./LoginForm.vue";

const { getUser } = actions;

getUser();
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
@keyframes rotating_logo {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
