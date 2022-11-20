<template>

    <v-form class="text-center" @submit.prevent="login()">

        <v-text-field label="Username" v-model="userInput.identifier" />

        <v-text-field label="Password" type="Password" v-model="userInput.password" />

        <v-btn dark type="submit" :loading="logging_in">
            <v-icon left>mdi-login</v-icon>
            <span>Login</span>
        </v-btn>

    </v-form>

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

const logging_in = ref(false)

const login = async () => {
    // Exchange credentials for JWT

    const { login_url } = state.options

    snackbar.show = false
    logging_in.value = true

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
        logging_in.value = false
    }


}

</script>

