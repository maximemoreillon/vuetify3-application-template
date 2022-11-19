<template>
  <v-app>

    <v-app-bar color="primary">

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
      </template>

      <!-- TODO: Logo -->


      <v-app-bar-title>{{ finalOptions.title }}</v-app-bar-title>
      <template v-slot:append>
        <!-- Can there be multiple items here? -->
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer">
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>

    <v-footer class="bg-grey-lighten-4">
      <!-- TODO: Make actual footer -->
      FOOTER
    </v-footer>


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
        // colors.header or header.color ?
        colors : {
          header: '#444444',
        },
        header: {
          logo: '',
          color: '#444444'
        }
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
