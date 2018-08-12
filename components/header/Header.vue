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
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  nav li
    text-align: right;
    list-style: none;
  
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
