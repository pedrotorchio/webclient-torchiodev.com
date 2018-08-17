<script>
import HeroSection from '../Hero';
import BioSection from '../Bio';

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
@import '~assets/styles/mixins';

section
  position: relative;
  overflow: hidden;

  +lg()
    padding: 150px 0;

  &> div
    width: 100%;
  +xl()
    &.narrow > div
      padding: 150px calc((100vw - 960px)/2);

</style>
