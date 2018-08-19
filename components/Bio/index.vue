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
  section-container(class='narrow' content-class='row align-center')
      div.avatar.f-1
        image-element(
          :image='avatar'
        )
      p.column.text.justify-between(v-html='text')
</template>

<style lang="stylus" scoped>

.avatar
  position: relative;
  border-radius: 50%;
  padding: 20px;
  background: grey;
  overflow: hidden;
  
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
  font-size: 18px;
  line-height: 2em;
  padding-left: 20px;
  /deep/ strong
    font-size: 1.2em !important;
  /deep/ p
    margin-top: 1em;

</style>
