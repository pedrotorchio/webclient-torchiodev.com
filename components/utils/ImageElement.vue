<script>
import ResponsiveImage from 'vue-responsive-img';

export default {
  name: 'ImageElement',
  components: {
    ResponsiveImage
  }
}
</script>
<template lang="pug">
  responsive-image.img(
    :sources=`[{url: 'http://via.placeholder.com/900x900', width: 900},
              {url: 'http://via.placeholder.com/600x600', width: 600},
              {url: 'http://via.placeholder.com/300x300', width: 300}]`
  )
</template>

