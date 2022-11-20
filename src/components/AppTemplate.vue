<template>
  <!-- app, app-bar and stuff in MainLayout, which is a top-level view -->
  <RouterView />
</template>

<script setup>

// TODO: See if can use import { useRouter, useRoute } from 'vue-router'
import router from '@/router'

import { useAppTemplateStore } from '@/stores/appTemplateStore'
import { storeToRefs } from 'pinia'

const appTemplateStore = useAppTemplateStore()
const { options, user } = storeToRefs(appTemplateStore)
const { getUser } = appTemplateStore

const props = defineProps({
  options: { type: Object }
})

options.value = props.options


// Navigation guards
router.beforeEach( async (to, from) => {

  // Allow user to access login page without checking identify
  // maybe not a good idea
  if (to.name === 'login') return
  // Check if user is logged in
  await getUser()
  if (!user.value) return { name: 'login' }
  return
  
  
})







</script>
