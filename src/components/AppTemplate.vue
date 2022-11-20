<template>
  <v-app>
    <template v-if="state.authenticating">
      <!-- TODO: Make component -->
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </template>
    <template v-else-if="!state.user && authenticationRequired ">
      <LoginForm />
    </template>
    <template v-else>
      <AppLayout />
    </template>
  
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { state, actions } from '@/templateStore'
import LoginForm from '@/components/LoginForm.vue'
import AppLayout from '@/components/AppLayout.vue'

const props = defineProps({
  options: { type: Object }
})

state.options = props.options
const { getUser } = actions

getUser()

const authenticationRequired = computed(() => {
  return state.options.login_url && state.options.identification_url
})










</script>
