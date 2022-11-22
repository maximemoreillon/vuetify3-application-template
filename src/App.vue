<template>
  <AppTemplate :options="options">

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
import AppTemplate from '@/components/AppTemplate.vue'
// import AppTemplate from 'vuetify3-application-template'
// import 'vuetify3-application-template/dist/style.css'

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

      }
    }
  }
}

</script>
