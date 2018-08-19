<script>
import PageHeader from '~/components/Header';
import PageBody from '~/components/Body';

export default {
  components: {
    PageHeader,
    PageBody
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

<template lang="pug">
  main
    div#hamburguer.collapsable-sidebar-hamburguer( @click='showHeader = !showHeader'
      :class=`{
        open: showHeader
      }`
    )
    page-header#main-header.collapsable-sidebar(
      :class=`{
        open: showHeader
      }`
      :logo="logo"
      :email="email"
    )
    page-body#main-container( @click='showHeader = false'
      :class=`{
        hidden: showHeader
      }`
    )
</template>

<style lang="stylus" scoped src="~/assets/styles/pages/index-header.styl"></style>
<style lang="stylus" scoped src="~/assets/styles/pages/index-body.styl"></style>
<style lang="stylus" scoped>
@import '~assets/styles/mixins';

  side-width = 200px;
  #hamburguer
    z-index: 2;
  #main-header
    z-index: 3;
    width: side-width;
  #main-container
    position: relative;
    z-index: 1;

    +lg()
      padding-left: side-width;


</style>