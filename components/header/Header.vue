<script>
import ImageElement from '~/components/utils/ImageElement';
export default {
  name: 'Header',
  props: {
    logo: {},
    email: {
      type: String,
      required: false
    }
  },
  components: {
    ImageElement
  }
}
</script>

<template lang="pug">
  aside

    image-element(
      :image="logo"
      :sizes=`[
        '(min-width) 80vw',
        '200px'
      ]`
    )

    nav
      ul
        li Me
        li Work
        li Skills
        li More Me

    h4(v-text='email')
</template>

<style lang="stylus" scoped> 
@import '~assets/styles/mixins.styl';

  aside
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img
      width: 100%;
      height: auto;
  
    nav 
      height: 50%;
      +xl()
        height: 256px;

      max-height: 512px;
      ul
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        line-height: 64px;
        li
          font-weight: 100;
          text-align: right;
          list-style: none;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: .5em;
          &.loaded
            font-weight: bold;
    h4
      text-align: center;
      font-weight: 100;
</style>
