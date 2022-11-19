<template>
  <AppTemplate :options="options"/>
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
        login_url: 'https://api.users.maximemoreillon.com/v2/auth/login',
        identification_url: 'https://api.users.maximemoreillon.com/v2/users/self'
      }
    }
  }
}

</script>
