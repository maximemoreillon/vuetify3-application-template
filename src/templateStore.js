// A custom store without using Pinia
import { reactive } from "vue"
import axios from 'axios'
import VueCookies from 'vue-cookies'

const jwtKey = 'jwt'

export const state = reactive({
    options: null,
    user: null
})

export const actions = {
    async getUser() {
        try {
            const jwt = VueCookies.get(jwtKey)
            const { identification_url: url } = state.options
            const headers = { authorization: `Bearer ${jwt}` }
            const { data } = await axios.get(url, { headers })
            state.user = data
            console.log('User authenticated')
        } catch (error) {
            console.error(error)
            state.user = null
        }

    },

    async logout(){
        VueCookies.remove(jwtKey)
        state.user = null
        // this.$router.push({ name: 'login' })
    }
}

