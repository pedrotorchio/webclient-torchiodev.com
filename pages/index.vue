<template lang="pug">
  main
    div.hamburguer(
      :class=`{
        open: showHeader
      }`
    )
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
  z-index: 3;
  width: wd = 200px;
  height: 100vh;
  top: 0;
  bottom: 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  left: -(wd);
  &.open
    left: 0;
  
  +md()
    left: 0;

#main-header, .hamburguer
  transition: left .5s cubic-bezier(0,.08,0,1.01);
  position: fixed;


hamburguer-strip(space)
  content: '';
  height: (space/3);
  border-radius: 10px;
  width: space*3;
  position: absolute;
  background-color: grey;

.hamburguer
  z-index: 2;
  space = 12px;
  hamburguer-strip(space);

  top: space*2;
  left: space*2;
  
  
  &:before, &:after
    hamburguer-strip(space);
  &:before
    top: space;
  &:after
    top: space * 2;
  &.open
    left: -5*space;


  +md()
    display: none;
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
