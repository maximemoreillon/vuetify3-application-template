<template>
  <!-- app, app-bar and stuff in MainLayout, which is a too-level view -->
  <RouterView />
</template>

<script setup>
import { useAppTemplateStore } from '@/stores/appTemplateStore'

const props = defineProps({
  options: { type: Object }
})

const appTemplateStore = useAppTemplateStore()

appTemplateStore.options = props.options





</script>
