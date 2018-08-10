<template>
  <section class="container">
    <h1>scss</h1>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
$padding: 15px;
.container {
  h1 {
    padding: $padding;
    border: 1px solid black;
  }
}
</style>

