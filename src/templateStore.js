// A custom store without using Pinia
import { reactive } from "vue"
import axios from 'axios'
import VueCookies from 'vue-cookies'

const jwtKey = 'jwt'

export const state = reactive({
    options: null,
    user: null,
    authenticating: false, // This would be more of an AuthWall thing
})

export const actions = {
    async getUser() {
        try {

            // Not sure which one to use for now
            state.authenticating = true

            const jwt = VueCookies.get(jwtKey)
            const { identification_url: url } = state.options
            const headers = { authorization: `Bearer ${jwt}` }
            const { data } = await axios.get(url, { headers })

            state.user = data

        } catch (error) {
            console.error(error)
            state.user = null
        } finally {
            state.authenticating = false
        }

    },

    async logout(){
        VueCookies.remove(jwtKey)
        state.user = null
        // this.$router.push({ name: 'login' })
    }
}

