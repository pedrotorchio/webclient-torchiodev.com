<template lang="pug">
  div
    page-header(
      :logo="logo"
      :email="email"
    )
    nuxt
</template>

<style lang="stylus">
@import '~assets/styles/global';
  
#main-header
  width: 200px;
  height: 100%;
  height: 100vh;
  border: 1px solid black;
div
  border: 1px solid black;

  width: 100%;
  width: 100vw;

</style>

<script>
import PageHeader from '~/components/header/Header';

export default {
  components: {
    PageHeader
  }
}
</script>
