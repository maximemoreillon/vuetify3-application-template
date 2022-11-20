<template>
  <v-app>

    <v-app-bar color="primary">
    
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
    
      </template>
    
      <!-- TODO: Fix too close to nav icon -->
      <v-img max-width="2.5em" max-height="2.5em" src="https://cdn.maximemoreillon.com/logo/thick/logo.png"></v-img>
    
    
      <v-app-bar-title>{{ state.options.title }}</v-app-bar-title>
    
      <template v-slot:append>
        <!-- Can there be multiple items here? -->
    
        <v-btn icon="mdi-logout" @click="logout()"></v-btn>
    
    
    
      </template>
    </v-app-bar>
    
    <v-navigation-drawer v-model="drawer">
      <!-- TODO: Find way to pass navigation -->

      <slot name="nav" />

      

    </v-navigation-drawer>
    
    <!-- TODO: background color customizable -->
    <v-main class="bg-grey-lighten-4">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    
    <v-footer app class="bg-grey-lighten-4">
      <!-- TODO: Make actual footer -->
      {{ state.options.title }} - {{ state.options.author }}
    </v-footer>

  
    
  
  
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { state, actions } from '@/templateStore'

const drawer = ref(false)

const { logout } = actions


</script>
