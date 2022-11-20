<template>
    <!-- TODO: CENTER LOGIN FORM ON SCREEN -->
    <v-container fluid>
        <v-card max-width="30rem" class="mx-auto" >
            <v-card-title>{{ state.options.title }}</v-card-title>
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
import { state, actions } from '@/templateStore'

import { useRouter } from 'vue-router'

import axios from 'axios'
import VueCookies from 'vue-cookies'



const router = useRouter()

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
const from = ref()


const login = async () => {
    // Exchange credentials for JWT

    const { login_url } = state.options

    snackbar.show = false
    processing.value = true

    try {
        const { data } = await axios.post(login_url, userInput)
        const { jwt } = data

        // TODO: Store jwt in either cookies or localstorage according to options
        // TODO: secure, samesite, expires etc
        VueCookies.set('jwt', jwt)

        await actions.getUser(jwt)

        // TODO: access whatever the user was accessing
        router.push('/')



        

    } catch (error) {
        snackbar.show = true
        snackbar.text = 'Login failed'

        console.error(error)
    } finally {
        processing.value = false
    }

    
}

</script>

