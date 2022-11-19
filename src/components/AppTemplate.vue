<template>
  <RouterView />
</template>

<script>
export default {
  name: 'AppTemplate',
  props: {
    options: {
      type: Object,
    },
  },

}
</script>
