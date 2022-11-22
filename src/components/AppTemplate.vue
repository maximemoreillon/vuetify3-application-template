<template>
  <v-app>
    <!-- Those two could be combined into 'Authentication wall' -->
    <template v-if="authenticationRequired">
      <AuthenticatingProgress v-if="state.authenticating" />
      <LoginForm v-else-if="!state.user" />
    </template>
    <AppLayout v-else>

      <slot></slot>

      <template v-slot:nav>
        <slot name="nav"></slot>
      </template>
      
    </AppLayout>  
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { state, actions } from '@/templateStore'
import LoginForm from '@/components/LoginForm.vue'
import AppLayout from '@/components/AppLayout.vue'
import AuthenticatingProgress from '@/components/AuthenticatingProgress.vue'

const props = defineProps({
  options: { type: Object }
})

state.options = props.options
const { getUser } = actions


const authenticationRequired = computed(() => {
  return state.options.login_url && state.options.identification_url
})

if (authenticationRequired) getUser()

</script>
