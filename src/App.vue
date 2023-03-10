<template>
  <AppTemplate :options="options" @userChanged="userChangedCallback($event)">

    <!-- Default slot: Router view -->
    <RouterView />
    
    <!-- Nav slot -->
    <template v-slot:nav>
      <v-list nav>
        <v-list-item prepend-icon="mdi-home" title="Home" :to="{ name: 'home' }"></v-list-item>
        <v-list-item prepend-icon="mdi-information-outline" title="About" :to="{ name: 'about' }"></v-list-item>
      </v-list>
    </template>

  </AppTemplate>
</template>

<script>
import AppTemplate from '../src/AppTemplate.vue'

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
        // logo: 'sampleApp/assets/logo.png' 
      }
    }
  },
  methods: {
    userChangedCallback({user,jwt}) {

      // Set Axios headers
      // This seems to interfere with the template's axios
      this.axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

      // Store user info in Pinia

      
    }
  }
}

</script>
