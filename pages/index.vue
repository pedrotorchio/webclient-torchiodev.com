<template lang="pug">
  main
    page-header#main-header(
      :class=`{
        open: showHeader
      }`
      :logo="logo"
      :email="email"
    )
</template>

<style lang="stylus" scoped>
@import '~assets/styles/mixins.styl';

#main-header
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  transition: left .5s cubic-bezier(0,.08,0,1.01);
  left: -100%;
  &.open
    left: 0;
  
  +md()
    left: 0;
</style>


<script>
import PageHeader from '~/components/header/Header';

export default {
  components: {
    PageHeader
  },
  data: () => ({
    showHeader: false
  }),
  async asyncData({app}) {    
    const info = await app.$api.getAppInfo();

    return {
      email: info.contact_email,
      logo: info.logo
    }
  }
}
</script>
