<template lang="pug">
  section
    image-element(
      :image="image"
    )
    h1(v-text='title')

</template>
<style lang="stylus" scoped>

section
  background-color: #c09ad9;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  
  h1
    font-weight: 100;
    text-align: right;
    list-style: none;
    font-size: 48px;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    color: white;
    z-index: 2;


</style>
<script>
import ImageElement from '~/components/utils/ImageElement';

export default {
  name: 'HeroSection',
  components: {
    ImageElement
  },
  data: () => ({
    image: null,
    title: ''
  }),
  methods: {
    async fetchData() {
      const info = await this.$api.getAppInfo();
      return info;
    }
  },
  created() {
    this.fetchData()
        .then( info => {
          this.image = info.main_image
          this.title = info.title
        });
  }
}
</script>
