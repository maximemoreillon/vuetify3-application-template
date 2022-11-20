<template>
    <v-app>

        <v-app-bar color="primary">

            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="drawer = !drawer" />

            </template>
            
            <!-- TODO: Fix too close to nav icon -->
            <v-img max-width="2.5em" max-height="2.5em" src="https://cdn.maximemoreillon.com/logo/thick/logo.png"></v-img>


            <v-app-bar-title>{{ options.title }}</v-app-bar-title>

            <template v-slot:append>
                <!-- Can there be multiple items here? -->

                <template v-if="user">
                    <v-btn icon="mdi-logout" @click="logout()"></v-btn>
                </template>
                <template v-else>
                    <v-btn icon="mdi-login" :to="{name: 'login'}"></v-btn>
                </template>


            </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer">
            <!-- TODO: Find way to pass navigation -->
            <v-list nav>
                <v-list-item prepend-icon="mdi-home" title="Home" :to="{name: 'home'}"></v-list-item>
                <v-list-item prepend-icon="mdi-information-outline" title="About" :to="{name: 'about'}"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- TODO: background color customizable -->
        <v-main class="bg-grey-lighten-4">
            <v-container>
                <RouterView />
            </v-container>
        </v-main>

        <v-footer app class="bg-grey-lighten-4">
            <!-- TODO: Make actual footer -->
            {{ options.title }} - {{ options.author }}
        </v-footer>


    </v-app>
</template>

<script setup>
import { ref } from 'vue'

// import { useAppTemplateStore } from '@/stores/appTemplateStore'
// import { storeToRefs } from 'pinia'
// const appTemplateStore = useAppTemplateStore()
// const { options, user } = storeToRefs(appTemplateStore)
// const { logout } = appTemplateStore

import { state, actions } from '@/templateStore'
const { options, user } = state

const drawer = ref(false)



</script>
