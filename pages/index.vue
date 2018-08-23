<script>
import PageHeader from '~/components/Header';
import PageBody from '~/components/Body';
import Section from '~/components/Section';

export default {
  extends: Section,
  components: {
    PageHeader,
    PageBody
  },
  data: () => ({
    showHeader: false,
    loaded: {
      hero: false,
      bio: false,
      work: false,
      services: false,
      experience: false,
      skills: false,
      education: false,
      languages: false,
      social: false,
      more: false
    }
  }),
  methods: {
    sectionLoaded(key) {

      this.loaded[key] = true;

      switch (key) {
        case 'languages': case 'social':
          this.loaded['more'] = true;
      }
    }
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
      :loaded="loaded"
    )
    page-body#main-container( @click='showHeader = false'
      @loaded='sectionLoaded'
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
    min-width: side-width;
    max-width: side-width * 1.5;
  #main-container
    position: relative;
    z-index: 1;

    +lg()
      padding-left: side-width;


</style>