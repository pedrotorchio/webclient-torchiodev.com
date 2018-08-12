<template lang="pug">
  main
    page-header(
      :logo="logo"
      :email="email"
    )
</template>

<style lang="stylus">
@import '~assets/styles/global';
  
#main-header
  width: 200px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

</style>

<script>
import PageHeader from '~/components/header/Header';

export default {
  components: {
    PageHeader
  },
  async asyncData({app}) {    
    const info = await app.$api.getAppInfo();

    return {
      email: info.contact_email,
      logo: info.logo
    }
  }
}
</script>
