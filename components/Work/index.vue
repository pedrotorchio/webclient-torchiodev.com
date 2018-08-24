<script>
import Section from '~/components/Section';
export default {
  extends: Section,
  props: {
    value: {
      type: Object
    }
  }
}
</script>
<template lang="pug">
  section-container
    div.square-space
      div
        div.text

        div.thumbs
          
            image-element(
              v-for='work in value'
              class='thumbnail'
              :image="work.thumbnail"
              :sizes=`[
                '(min-width: 1400px) 350vw',
                '(min-width: 1024px) 200vw',
                '100vw'
              ]`
            )

</template>

<style lang="stylus" scoped>
@import '~assets/styles/mixins';
@import '~assets/styles/theme';

.fill-size
  width: 100%;
  height: 100%;

.section
  initial-height = 300px;
  background-color: red--color;
  min-height: initial-height;
  max-height: initial-height;
  padding: 0;


  &.loaded
    max-height: 700px;

  /deep/ .content
    @extend .fill-size;
    padding: 0;
    box-sizing: content-box;

    & > div.square-space
      @extend .fill-size;
      padding-bottom: 50%;
      position: relative;

      & > div
        @extend .fill-size;
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        align-items: stretch;

        & > div.text      
          @extend .fill-size;
          flex: 1 1 320px;
          padding-left: 100px;

        & > div.thumbs      
          @extend .fill-size;
          flex: 0 0 50%;

          display: flex;
          justify-content: stretch;
          align-items: stretch;
          flex-wrap: wrap;

          .thumbnail
            flex: 0 0 50%;
            max-height: 50%;
            max-width: 50%;
          

</style>
