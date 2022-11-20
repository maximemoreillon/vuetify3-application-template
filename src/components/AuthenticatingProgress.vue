<template>
    <v-main class="bg-grey-lighten-4 main">
        <v-progress-circular size="72" indeterminate color="primary"></v-progress-circular>
        <div>Authenticating...</div>
    </v-main>
</template>

<script setup>

</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}
</style>