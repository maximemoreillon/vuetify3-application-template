<template>
    <v-container>
        <v-card max-width="60rem" class="mx-auto">
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-form class="text-center" @submit.prevent="login()">
            
                    <v-text-field label="Username" v-model="userInput.identifier" />
            
                    <v-text-field label="Password" type="Password" v-model="userInput.password" />
            
                    <v-btn dark type="submit" @click="login" :loading="processing">
                        <v-icon>mdi-login</v-icon>
                        <span class="ml-2">Login</span>
                    </v-btn>
            
            
                    <v-snackbar color="#C00000" dark v-model="snack">
                        {{ snack_text }}
            
                        <template v-slot:action="{ attrs }">
                            <v-btn icon v-bind="attrs" @click="snack = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </template>
                    </v-snackbar>
            
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>


import axios from 'axios'

export default {
    name: 'LoginForm',
    props: {
        options: Object,
    },

    data() {
        return {
            userInput: {
                identifier: '',
                password: '',
            },
            snack: null,
            snack_text: '',
            processing: false,
        }
    },
    methods: {
        async login() {
            // Exchange credentials for JWT

            const url = this.options.login_url
            const body = this.userInput

            this.snack = null
            this.processing = true

            const { data } = await axios.post(url, body)
            cobnsole.log(data)


        },



    },

}
</script>

