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

export default {
  name: 'App',
  components: {
    AppTemplate
  },
  data(){
    return {
      options: {
        title: 'This is an example',
        author: 'Maxime Moreillon',
        login_url: 'https://api.users.maximemoreillon.com/v2/auth/login',
        identification_url: 'https://api.users.maximemoreillon.com/v2/users/self',
        // nav: [
        //   { icon: 'mdi-home', title: 'Home', to: {name: 'home'}}
        // ]
      }
    }
  }
}

</script>
