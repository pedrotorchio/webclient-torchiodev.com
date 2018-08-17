<script>

export default {
  
  data: () => ({
    avatar: null
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
        });
  }
}
</script>

<template lang="pug">
  section.narrow.row
    div.avatar.f-1
      image-element(
        :image='avatar'
      )
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

</style>
