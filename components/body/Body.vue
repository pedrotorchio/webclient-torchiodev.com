<script>
import HeroSection from './Hero';
import BioSection from './Bio';

export default {
  components: {
    HeroSection,
    BioSection
  }  
}
</script>
<template lang="pug">
  <div>
    hero-section#hero
    bio-section#bio
  </div>
</template>

<style lang="stylus">

section
  position: relative;
  overflow: hidden;


</style>
