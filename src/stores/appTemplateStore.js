import { defineStore } from 'pinia'
import axios from 'axios'
import VueCookies from 'vue-cookies'

export const useAppTemplateStore = defineStore('appTemplate', {
    state: () => ({
        templateState: 'initial',
        options: null,
        user: null
    }),
    actions: {

        async getUser() {
            const jwt = VueCookies.get('jwt')
            const { identification_url: url } = this.options
            const headers = { authorization: `Bearer ${jwt}` }
            const { data } = await axios.get(url, { headers })
            this.user = data
        },

        async getUserFromJwt(jwt){
            const { identification_url: url } = this.options
            const headers = { authorization: `Bearer ${jwt}`}
            const { data } = await axios.get(url, { headers })
            this.user = data
        },
        logout(){
            alert('not implemented')
        }
    },
})