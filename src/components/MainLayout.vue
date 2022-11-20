<template>
    <v-app>

        <v-app-bar color="primary">

            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="drawer = !drawer" />
            </template>

            <!-- TODO: Logo -->


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
            <!-- TODO: Navigation slot -->
            <v-list nav>
                <v-list-item prepend-icon="mdi-home" title="Home" :to="{name: 'home'}"></v-list-item>
                <v-list-item prepend-icon="mdi-information-outline" title="About" :to="{name: 'about'}"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-grey-lighten-4">
            <v-container>
                <RouterView />
            </v-container>
        </v-main>

        <v-footer app class="bg-grey-lighten-4">
            <!-- TODO: Make actual footer -->
            FOOTER
        </v-footer>


    </v-app>
</template>

<script setup>
import { useAppTemplateStore } from '@/stores/appTemplateStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const appTemplateStore = useAppTemplateStore()
const { options, user } = storeToRefs(appTemplateStore)
const { logout } = appTemplateStore

const drawer = ref(false)



</script>
