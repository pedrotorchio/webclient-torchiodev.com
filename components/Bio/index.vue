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
  section
    div.avatar
      image-element(
        :image='avatar'
      )
</template>

<style lang="stylus" scoped>

.avatar
  width: 300px;
  position: relative;
  border-radius: 50%;
  padding: 20px;
  background: grey;
  
  &:before
    padding-bottom: 100%;

</style>
