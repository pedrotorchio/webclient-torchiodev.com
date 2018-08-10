<template lang="pug">
  section.container
    h1 scss
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="stylus">
padding = 16px;
.container
  h1
    padding: padding
    border: 1px solid black
</style>

