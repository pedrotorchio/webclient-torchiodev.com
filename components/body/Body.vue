<script>
import HeroSection from './hero/HeroSection';

export default {
  components: {
    HeroSection
  }  
}
</script>
<template lang="pug">
  <div id="section-container">
    hero-section#hero
  </div>
</template>

<style lang="stylus" scoped>

#section-container > section
  position: relative;

</style>
