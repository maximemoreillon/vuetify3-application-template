<template>
  <!-- app, app-bar and stuff in MainLayout, which is a top-level view -->
  <RouterView />
</template>

<script setup>
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

  // Check if user is logged in
  await getUser()

  if (!user.value) {
    if (to.name !== 'login') return { name: 'login' }
    return
  }
})







</script>
