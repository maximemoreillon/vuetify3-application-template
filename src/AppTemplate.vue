<template>
  <!-- <v-app> -->
  <AuthenticationWall v-if="authenticationRequired && !state.user" />

  <template v-else>
    <v-app-bar :color="state.options.appBarColor || '#333333'" theme="dark">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" v-if="navExists" />
        <img
          v-if="customHeaderLogo"
          :src="customHeaderLogo"
          class="header_logo"
        />
        <img v-else class="header_logo rotating_logo" src="@/assets/logo.png" />
      </template>

      <v-app-bar-title>
        {{ state.options.title || "Untitled application" }}
      </v-app-bar-title>

      <slot name="header"></slot>

      <template v-slot:append>
        <ThemeToggler />
        <template v-if="state.user">
          <v-btn icon="mdi-logout" @click="logout()" />
        </template>
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

    <v-main>
      <v-container :fluid="state.options.fluid">
        <slot />
        <router-view v-if="!slots.default" />
      </v-container>
    </v-main>

    <v-footer class="footer" v-if="state.options.footer">
      <slot name="footer" />
      <template v-if="!slots.footer">
        <span>
          {{ state.options.title }}
        </span>
        <span class="mx-2">-</span>
        <img
          v-if="state.options.footerLogo"
          class="footer_logo"
          :src="state.options.footerLogo"
        />
        <img
          v-else-if="state.options.footerLogo === undefined"
          class="footer_logo rotating_logo"
          src="@/assets/logo.png"
        />
        <span>
          {{ state.options.author || "Maxime Moreillon" }}
        </span>
      </template>
    </v-footer>
  </template>
  <!-- </v-app> -->
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, useSlots } from "vue";
import VueCookies from "vue-cookies";

import { state, actions } from "./templateStore";

import AuthenticationWall from "./AuthenticationWall.vue";
import ThemeToggler from "./ThemeToggler.vue";

const slots = useSlots();
const emit = defineEmits(["userChanged"]);
const props = defineProps({
  options: { type: Object },
});

onMounted(() => {
  state.options = { ...state.options, ...props.options };
});

const authenticationRequired = computed(
  () =>
    (state.options.login_url && state.options.identification_url) ||
    (state.options.oidc?.authority && state.options.oidc?.client_id)
);

const navExists = computed(() => state.options.nav || slots.nav);
const user = computed(() => state.user);
const customHeaderLogo = computed(
  () => state.options.header_logo || state.options.logo
);

watch(
  user,
  () => {
    const eventData: any = {
      user: user.value,
    };

    if (state.options.login_url) {
      eventData.jwt = (VueCookies as any).get("jwt");
    }

    emit("userChanged", eventData);
  },
  { deep: true }
);

const { logout } = actions;

const drawer = ref(true);
</script>

<style>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  max-height: 5em;
}

.header_logo {
  max-height: 2.5em;
  object-fit: scale-down;
}

.footer_logo {
  height: 1.5em;
  width: 1.5em;
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
