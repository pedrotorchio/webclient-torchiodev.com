<script>
import Section from '~/components/Section';
export default {
  extends: Section,
}
</script>

<template lang="pug">
  section-container

</template>

<style lang="stylus" scoped>
@import '~assets/styles/mixins';
@import '~assets/styles/theme';
.section
  background-color: color_red;
  min-height: 300px;
  max-height: 300px;

</style>
