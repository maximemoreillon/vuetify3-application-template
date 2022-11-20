// This store is currently not used because it relies on Pinia

import { defineStore } from 'pinia'
import axios from 'axios'
import VueCookies from 'vue-cookies'

const jwtKey = 'jwt'

export const useAppTemplateStore = defineStore('appTemplate', {
    state: () => ({
        templateState: 'initial',
        options: null,
        user: null
    }),
    actions: {

        async getUser() {
            try {
                const jwt = VueCookies.get(jwtKey)
                const { identification_url: url } = this.options
                const headers = { authorization: `Bearer ${jwt}` }
                const { data } = await axios.get(url, { headers })
                this.user = data
            } catch (error) {
                this.user = null
            }
            
        },

        async logout(){
            VueCookies.remove(jwtKey)
            this.user = null
            this.$router.push({ name: '/login' })
            // TODO: redirect to login page?
        }
    },
})