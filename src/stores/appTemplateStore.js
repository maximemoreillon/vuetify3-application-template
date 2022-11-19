import { defineStore } from 'pinia'

export const useAppTemplateStore = defineStore('appTemplate', {
    state: () => ({
        templateState: 'initial',
        options: null,
        user: null
    }),
    actions: {

    },
})