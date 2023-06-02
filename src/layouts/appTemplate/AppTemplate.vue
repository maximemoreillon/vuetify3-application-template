<template>
  <v-app>
    <AuthenticationWall v-if="authenticationRequired && !state.user" />

    <template v-else>
      <v-app-bar :color="state.options.appBarColor || '#333333'" theme="dark">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer" v-if="navExists" />
          <img
            v-if="state.options.logo"
            :src="state.options.logo"
            class="header_logo"
          />
          <img
            v-else
            class="header_logo rotating_logo"
            src="@/assets/logo.png"
          />
        </template>

        <v-app-bar-title>
          {{ state.options.title || "Untitled application" }}
        </v-app-bar-title>

        <slot name="header"></slot>

        <template v-slot:append v-if="state.user">
          <!-- Can there be multiple items here? -->
          <v-btn icon="mdi-logout" @click="logout()"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" v-if="navExists">
        <slot name="nav" />

        <template v-if="!slots.nav">
          <v-list nav>
            <v-list-item
              v-for="({ icon, title, to }, index) in state.options.nav"
              :key="`nav_item_${index}`"
              :prepend-icon="icon"
              :title="title"
              :to="to"
            />
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main class="bg-grey-lighten-4">
        <v-container>
          <slot />
          <router-view v-if="!slots.default" />
        </v-container>
      </v-main>

      <v-footer app class="bg-grey-lighten-4 footer text-center">
        <v-row justify="center">
          <v-col cols="auto">
            {{ state.options.title }} -
            {{ state.options.author || "Maxime Moreillon" }}
          </v-col>
        </v-row>
      </v-footer>
    </template>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, useSlots } from "vue";
import VueCookies from "vue-cookies";

import { state, actions } from "./templateStore";

import AuthenticationWall from "./AuthenticationWall.vue";

const slots = useSlots();
const emit = defineEmits(["userChanged"]);
const props = defineProps({
  options: { type: Object },
});

onMounted(() => {
  state.options = props.options;
});

const authenticationRequired = computed(
  () => state.options.login_url && state.options.identification_url
);

const navExists = computed(() => state.options.nav || slots.nav);

const user = computed(() => state.user);

watch(user, () => {
  const eventData = {
    user: user.value,
    // @ts-ignore
    jwt: VueCookies.get("jwt"),
  };
  emit("userChanged", eventData);
});

const { logout } = actions;

const drawer = ref(false);
</script>

<style>
.header_logo {
  max-height: 2.5em;
  object-fit: scale-down;
}

.rotating_logo {
  animation-name: rotating_logo;
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
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
