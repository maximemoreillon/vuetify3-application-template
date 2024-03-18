# Vuetify 3 application template

Usage example:

```vue
<template>
  <AppTemplate :options="options" @userChanged="handleUserChanged($event)">
    <template v-slot:nav>
      <v-list>
        <v-list-item> </v-list-item>
      </v-list>
    </template>
  </AppTemplate>
</template>

<script lang="ts" setup>
import AppTemplate from "@moreillon/vuetify3-application-template"
import "@moreillon/vuetify3-application-template/dist/style.css"
import { ref } from "vue"

const options = ref({
  title: "Example application",
  author: "Maxime Moreillon",
  login_url: "https://api.users.maximemoreillon.com/auth/login",
  identification_url: "https://api.users.maximemoreillon.com/users/self",
})

async function handleUserChanged({ user, jwt }: any) {
  if (!user) return
  userStore.user = user

  axios.interceptors.request.use(
    (config: any) => {
      config.headers = {
        Authorization: `Bearer ${jwt}`,
      }
      return config
    },
    (error: any) => Promise.reject(error)
  )
}
</script>
```
