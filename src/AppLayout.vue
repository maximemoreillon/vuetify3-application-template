<template>
  <v-app-bar :color="state.options.appBarColor || '#444444'" theme="dark">
  
    <template v-slot:prepend >
      <v-app-bar-nav-icon v-if="navExists" @click="drawer = !drawer" />
    </template>


    <!-- TODO:  img like previous template-->
    <!-- <v-img max-width="2.5em" max-height="2.5em" src="https://cdn.maximemoreillon.com/logo/thick/logo.png"></v-img> -->
    <img 
      class="header_logo" 
      :class="{'rotating_logo': !state.options.logo}"
      :src="state.options.logo || 'https://cdn.maximemoreillon.com/logo/thick/logo.png'">

    <v-app-bar-title>{{ state.options.title }}</v-app-bar-title>

    <!-- Could put extra hader stuff here -->
    <slot name="header"></slot>

    <!-- This slot might not be ideal -->
    <template v-slot:append v-if="state.user">
      <!-- Can there be multiple items here? -->
      <v-btn icon="mdi-logout" @click="logout()"></v-btn>
    </template>
  </v-app-bar>
  
  <v-navigation-drawer v-model="drawer" v-if="navExists">
    <slot name="nav" ></slot>

    <template v-if="state.options.nav">
      <v-list nav>
        <v-list-item 
          v-for="({icon, title, to}, index) in state.options.nav"
          :key="`nav_item_${index}`" 
          :prepend-icon="icon" 
          :title="title" 
          :to="to" />
      </v-list>
    </template>

  </v-navigation-drawer>
  
  <v-main class="bg-grey-lighten-4">
    <v-container>
      <slot></slot>
    </v-container>
  </v-main>
  
  <v-footer app class="bg-grey-lighten-4 footer text-center">
    <v-row justify="center">
      <v-col cols="auto">
        {{ state.options.title }} - {{ state.options.author || 'Maxime Moreillon' }}
      </v-col>
    </v-row>
    
  </v-footer>
</template>

<script setup>
import { ref, useSlots, computed } from 'vue'
import { state, actions } from './templateStore'

const slots = useSlots()
const drawer = ref(false)
const { logout } = actions

const props = defineProps({
  options: { type: Object }
})

const navExists = computed(() => {
  return state.options.nav || slots.nav()[0].children.length
})

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