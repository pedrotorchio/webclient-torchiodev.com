<script>
import HeroSection from '../Hero';
import BioSection from '../Bio';
import WorkSection from '../Work';

export default {
  components: {
    HeroSection,
    BioSection,
    WorkSection
  },
  data: () => ({
    data: {
      hero: null,
      bio: null,
      work: null,
    }
  }),
  methods: {
    setLoaded(key, data) {
      this.data[key] = data;
      this.$emit('loaded', key);
    },
    async fetchData() {
      this.$api.getAppInfo()
          .then((info) => this.setLoaded('hero', { image: info.main_image, title: info.title }));
      this.$api.getAbout()
          .then((about) => this.setLoaded('bio', about));
      this.$api.getWorks()
          .then((works) => this.setLoaded('work', works));
      this.$api.getServices()
          .then((services) => this.setLoaded('services', services));
      this.$api.getExperiences()
          .then((experience) => this.setLoaded('experience', experience));
      this.$api.getSkills()
          .then((skills) => this.setLoaded('skills', skills));
      this.$api.getEducations()
          .then((education) => this.setLoaded('education', education));
      this.$api.getLanguages()
          .then((languages) => this.setLoaded('languages', languages));
      this.$api.getSocials()
          .then((social) => this.setLoaded('social', social));
    },
  },
  created() {
    this.fetchData();
  }
}
</script>
<template lang="pug">
  section-container
    hero-section#hero.section(v-model='data.hero' :class="{loaded: data.hero}")
    bio-section#bio.section(v-model='data.bio' :class="{loaded: data.bio}")
    work-section#work.section(v-model='data.work' :class="{loaded: data.work}")

</template>

<style lang="stylus">
@import '~assets/styles/mixins';


.section
  position: relative;
  overflow: hidden;
  transition: max-height 1s;
  
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
