<template>
    <v-container>
        <v-card max-width="60rem" class="mx-auto">
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form class="text-center" @submit.prevent="login()">
            
                    <v-text-field label="Username" v-model="userInput.identifier" />
            
                    <v-text-field label="Password" type="Password" v-model="userInput.password" />
            
                    <v-btn dark type="submit" :loading="processing">
                        <v-icon left>mdi-login</v-icon>
                        <span>Login</span>
                    </v-btn>
     
                </v-form>
            </v-card-text>
        </v-card>

        <v-snackbar :color="snackbar.color" dark v-model="snackbar.show">
            {{ snackbar.text }}
        
            <template v-slot:action="{ attrs }">
                <v-btn icon v-bind="attrs" @click="snackbar.show = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        
        </v-snackbar>
    </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useAppTemplateStore } from '@/stores/appTemplateStore'
import axios from 'axios'
import VueCookies from 'vue-cookies'

const appTemplateStore = useAppTemplateStore()
const { options, getUserFromJwt } = appTemplateStore


const userInput = reactive({
    identifier: '',
    password: '',
})

const snackbar = reactive({
    text: '',
    show: false,
    color: 'error'
})

const processing = ref(false)


const login = async () => {
    // Exchange credentials for JWT

    const url = options.login_url
    const body = userInput

    snackbar.show = false
    processing.value = true

    try {
        const { data } = await axios.post(url, body)
        const { jwt } = data

        // TODO: Store jwt in either cookies or localstorage according to options
        // TODO: secure, samesite, expires etc
        VueCookies.set('jwt', jwt)

        await getUserFromJwt(jwt)

        

    } catch (error) {
        snackbar.show = true
        snackbar.text = 'Login failed'

        console.error(error)
    } finally {
        processing.value = false
    }

    
}

</script>

