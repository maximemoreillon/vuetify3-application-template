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

import { computed, watch} from 'vue'
import VueCookies from 'vue-cookies'

import { state } from './templateStore'

import AppLayout from './AppLayout.vue'
import AuthenticationWall from './AuthenticationWall.vue'

const emit = defineEmits(['userChanged'])
const props = defineProps({
  options: { type: Object }
})


// Save options into custom store
state.options = props.options

const authenticationRequired = computed(() => {
  return state.options.login_url && state.options.identification_url
})

const user = computed(() => state.user)

watch( user, () => {
  const eventData = {
    user: user.value,
    jwt: VueCookies.get('jwt')
  } 
  emit('userChanged', eventData)
})


</script>
