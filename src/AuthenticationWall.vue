<template>
    <v-main class="bg-grey-lighten-4 main">
        
        <v-card width="30rem">
            
            <v-card-text>
                <v-row justify="center">
                    <v-col cols="5">
                        <v-img :src="state.options.logo || 'https://cdn.maximemoreillon.com/logo/thick/logo.png'"></v-img>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-card-title>
                        {{ state.options.title}}
                    </v-card-title>
                </v-row>
            </v-card-text>
            <v-card-text>
                <AuthenticatingProgress v-if="state.authenticating" />
                <LoginForm v-else-if="!state.user" />
            </v-card-text>
        
        </v-card>
        
    </v-main>
</template>

<script setup>
import { state, actions } from './templateStore'

import LoginForm from './LoginForm.vue'
import AuthenticatingProgress from './AuthenticatingProgress.vue'

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