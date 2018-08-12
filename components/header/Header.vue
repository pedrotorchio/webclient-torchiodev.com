<template lang="pug">
  aside#main-header

    image-element(
      :image="logo"
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
  .img {
    width: 100%;
    height: auto;
  }
  #main-header {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  nav 
    margin-bottom: 8em;
    ul
      line-height: 64px;
      li
        font-weight: 100;
        text-align: right;
        list-style: none;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: .3em;
        &.loaded
          font-weight: bold;
  h4
    text-align: center;
</style>

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
