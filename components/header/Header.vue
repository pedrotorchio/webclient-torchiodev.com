<template lang="pug">
  aside#main-header

    image-element

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
