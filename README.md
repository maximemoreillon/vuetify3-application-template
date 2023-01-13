# Vuetify 3 Application template

## Usage

```
<template>
  <AppTemplate :options="options">

    <!-- Default slot: Router view -->
    <RouterView />

    <!-- Nav slot -->
    <template v-slot:nav>
      <v-list nav>
        <v-list-item prepend-icon="mdi-home" title="Home" :to="{ name: 'home' }"/>
        <v-list-item prepend-icon="mdi-information-outline" title="About" :to="{ name: 'about' }"/>
      </v-list>
    </template>

  </AppTemplate>
</template>

<script>
import AppTemplate from '@moreillon/vuetify3-application-template'
import '@moreillon/vuetify3-application-template/dist/style.css'

export default {
  name: 'App',
  components: {
    AppTemplate
  },
  data(){
    return {
      options: {
        title: 'My application',
        author: 'Maxime Moreillon',
        login_url: 'https://api.users.maximemoreillon.com/v2/auth/login',
        identification_url: 'https://api.users.maximemoreillon.com/v2/users/self',
        // logo: 'src/assets/logo.png'

      }
    }
  },
  methods: {
    userChangedCallback({user,jwt}) {

      // Set Axios headers
      this.axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

      // Store user info in Pinia


    }
  }
}

</script>
```

## Dev commands

Building, Packing and installing package locally

```
npm run build && npm pack && npm install vuetify3-application-template-X.Y.Z.tgz

```
