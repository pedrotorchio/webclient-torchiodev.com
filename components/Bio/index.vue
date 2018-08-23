<script>
import Section from '~/components/Section';
export default {
  extends: Section,
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    avatar() {
      let avatar = null;
      if (this.value)
        avatar = this.value.avatar_image;
      return avatar;
    },
    text() {
      let text = '';
      if (this.value)
        text = this.value.cover_letter;
      return text;
    }
  }
}
</script>

<template lang="pug">
  section-container.narrow
      div.avatar
        image-element(
          :image='avatar'
        )
      p.column.text.justify-between(v-html='text')
</template>

<style lang="stylus" scoped>
@import '~assets/styles/mixins';

#bio /deep/ > .content
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;

  +lg()
    align-items: flex-start;
    flex-direction: row;

  

.avatar
  position: relative;
  border-radius: 50%;
  padding: 20px;
  background: grey;
  overflow: hidden;
  width: 320px;
  flex: 0 0 auto;
  margin-top: 2em;

  +lg()
    margin-top: 0;
  
  &:before
    content: '';
    padding-bottom: 100%;
    display: block;

  .img
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0; bottom: 0;
    left: 0; right: 0;
    position: absolute;

p.text
  font-size: 16px;
  line-height: 2em;
  padding-left: 20px;
  /deep/ strong
    font-size: 1.2em !important;
  /deep/ p
    margin-top: 1em;

</style>
