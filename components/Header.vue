<template lang="pug">
    aside
      img(:src="logoUrl" v-if="logoUrl")/
    
      nav
        ul
          li primeiro
          li segundo
          li terceiro
          li quarto

      h4.email

</template>
<script>

export default {
  data: () => ({
    logoUrl: false
  }),
  created() {
    this.$api.getAppInfo()
        .then(info => {
          this.logoUrl = info.logo.main_url
        });
  }
}
</script>
