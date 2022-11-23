<template>
  <v-app>
    
    <AuthenticationWall v-if="authenticationRequired && !state.user"/>

    <AppLayout v-else>

      <slot></slot>

      <template v-slot:header>
        <slot name="header"></slot>
      </template>


      <template v-slot:nav>
        <slot name="nav"></slot>
      </template>
      
      
    </AppLayout>  
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { state } from '@/templateStore'

import AppLayout from '@/components/AppLayout.vue'
import AuthenticationWall from '@/components/AuthenticationWall.vue'

// Ideally, styles would be imported here
// import 'vuetify3-application-template/dist/style.css'

const props = defineProps({
  options: { type: Object }
})


// Save options into custom store
state.options = props.options

const authenticationRequired = computed(() => {
  return state.options.login_url && state.options.identification_url
})


</script>
