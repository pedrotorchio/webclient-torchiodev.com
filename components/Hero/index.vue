<script>

export default {
  name: 'HeroSection',
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

<template lang="pug">
  section#hero.no-padding
    image-element(
      :image='image'
    )
    h1(v-text='title')

</template>
<style lang="stylus" scoped>
@import '~assets/styles/mixins';

#hero
  height: 100vh;
  position: relative;
    
  background-color: #f1dbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  +md()
    height: 350px;



  h1
    font-weight: 100;
    text-align: right;
    list-style: none;
    
    text-transform: uppercase;
    letter-spacing: 0.5em;
    color: white;
    z-index: 2;
    text-align: center;
    
    // width: 15em;
    font-size: 20px;

    +sm()
      font-size: 36px;
    +md()
      font-size: 48px;
    
  .img
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
        
 

</style>
