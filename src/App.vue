<template>
  <AppTemplate :options="options">
    <!-- PASSING NAV IS A PROBLEM -->
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
        login_url: 'https://api.users.maximemoreillon.com/v2/auth/login',
        identification_url: 'https://api.users.maximemoreillon.com/v2/users/self'
      }
    }
  }
}

</script>
