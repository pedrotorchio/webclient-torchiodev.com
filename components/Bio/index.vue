<script>

export default {
  
  data: () => ({
    avatar: null,
    text: ''
  }),
  methods: {
    async fetchData() {
      const info = await this.$api.getAbout();
      return info;
    }
  },
  created() {
    this.fetchData()
        .then( info => {
          this.avatar = info.avatar_image;
          this.text = info.cover_letter;
        });
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
