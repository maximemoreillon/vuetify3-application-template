import { defineStore } from 'pinia'

export const appTemplateStore = defineStore('appTemplate', {
    state: () => ({
        
        user: null  
    }),
    actions: {
        set_user(user) {
            this.user = user
        },

    },
})