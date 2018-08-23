<script>
import HeroSection from '../Hero';
import BioSection from '../Bio';

export default {
  components: {
    HeroSection,
    BioSection
  },
  data: () => ({
    data: {
      hero: null,
      bio: null
    }
  }),
  methods: {
    setLoaded(key, data) {
      this.$emit('loaded', key);
      this.data[key] = data;
    },
    async fetchData() {
      this.$api.getAppInfo()
          .then((info) => this.setLoaded('hero', { image: info.main_image, title: info.title }));
      this.$api.getAbout()
          .then((about) => this.setLoaded('bio', about));

    },
  },
  created() {
    this.fetchData();
  }
}
</script>
<template lang="pug">
  section-container
    hero-section#hero.section(v-model='data.hero')
    bio-section#bio.section(v-model='data.bio')

</template>

<style lang="stylus">
@import '~assets/styles/mixins';


.section
  position: relative;
  overflow: hidden;

  &> .content
    padding: 0 2em;

  &.no-padding
    padding: 0;
  
  +sm()
    padding: 2em 0;
  +md()
    padding: 50px 0;
  +lg()
    padding: 100px 0;

    &.narrow > .content
      max-width: 960px;
      margin: 0 auto;

</style>
