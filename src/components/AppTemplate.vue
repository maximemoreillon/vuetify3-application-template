<template>
  <v-app>

    <v-app-bar color="primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
      </template>
      <v-app-bar-title>{{ finalOptions.title }}</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer">
      
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AppTemplate',
  props: {
    options: {
      type: Object,
    },
  },
  data(){
    return {
      drawer: null,
      defaultOptions : {
        title: 'My Vuetify 3 Application',
        appBarColor: '#444444'
      }
    }
  },
  computed: {
    finalOptions(){
      // NOT NICE, FIND SHORTER WAY TO ACHIEVE THIS
      return {
        ...this.defaultOptions,
        ...this.options
      }
    }
  }
}
</script>
