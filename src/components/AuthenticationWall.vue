<template>
    <v-main class="bg-grey-lighten-4 main">
        <AuthenticatingProgress v-if="state.authenticating" />
        <LoginForm v-else-if="!state.user" />
    </v-main>
</template>

<script setup>
import { state, actions } from '@/templateStore'

import LoginForm from '@/components/LoginForm.vue'
import AuthenticatingProgress from '@/components/AuthenticatingProgress.vue'

const { getUser } = actions

getUser()


</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>