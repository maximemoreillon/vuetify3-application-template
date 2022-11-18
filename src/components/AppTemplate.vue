<template>
  <v-app>

    <v-app-bar color="#444444">
      <!-- Nav drawer -->

    </v-app-bar>

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
    options: Object,
  }
}
</script>
