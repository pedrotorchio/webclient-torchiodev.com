<script>
import Section from '~/components/Section';
export default {
  extends: Section,
}
</script>

<template lang="pug">
  section-container
    div
    div
</template>

<style lang="stylus" scoped>
@import '~assets/styles/mixins';
@import '~assets/styles/theme';
.section
  initial-height = 300px;
  background-color: red--color;
  min-height: initial-height;
  max-height: initial-height;
  padding: 0;
  

  &.loaded
    final-height = 700px;
    max-height: final-height;
    height: final-height;

  /deep/ .content
    height: 100%;
    display: flex;
    flex-direction: row;
    max-width: 1400px;
    
    & > div
      flex: 0 0 50%;
      height: 100%;
      background: lightgrey;

</style>
