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

                
                <v-btn icon="mdi-login" :to="{name: 'login'}"></v-btn>


            </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer">
            <!-- TODO: Navigation slot -->
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
import { ref, reactive } from 'vue'

const appTemplateStore = useAppTemplateStore()
const { options } = storeToRefs(appTemplateStore)

const drawer = ref(false)

</script>
