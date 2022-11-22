<template>
  <v-app-bar :color="state.options.appBarColor || '#444444'" theme="dark">
  
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </template>


    <!-- TODO:  img like previous template-->
    <v-img max-width="2.5em" max-height="2.5em" src="https://cdn.maximemoreillon.com/logo/thick/logo.png"></v-img>
  
    <v-app-bar-title>{{ state.options.title }}</v-app-bar-title>

    <!-- Could put extra hader stuff here -->
    <span>v{{ ver }}</span>

    <template v-slot:append>
      <!-- Can there be multiple items here? -->
      <v-btn icon="mdi-logout" @click="logout()"></v-btn>
    </template>
  </v-app-bar>
  
  <v-navigation-drawer v-model="drawer">
    <slot name="nav" />

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

  <!-- TODO: use options.nav as well -->
  </v-navigation-drawer>
  
  <v-main class="bg-grey-lighten-4">
    <v-container>
      <slot></slot>
    </v-container>
  </v-main>
  
  <v-footer app class="bg-grey-lighten-4">
    {{ state.options.title }} - {{ state.options.author }}
  </v-footer>
</template>

<script setup>
import { ref } from 'vue'
import { state, actions } from '@/templateStore'
import { version } from '../../package.json'



const drawer = ref(false)
const ver = ref(version)
const { logout } = actions


</script>
