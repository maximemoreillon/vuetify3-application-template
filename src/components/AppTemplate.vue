<template>
  <!-- app, app-bar and stuff in MainLayout, which is a top-level view -->
  <RouterView />
</template>

<script setup>

// TODO: See if can use import { useRouter, useRoute } from 'vue-router'
import router from '@/router'

import { state, actions } from '@/templateStore'


const props = defineProps({
  options: { type: Object }
})

state.options = props.options


// Navigation guards
router.beforeEach( async (to, from) => {


  // Allow user to access login page without checking identify
  // maybe not a good idea
  if (to.name === 'login') return
  // Check if user is logged in
  await actions.getUser()
  if (!state.user) return { name: 'login' }
  return
  
  
})







</script>
