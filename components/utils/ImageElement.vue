<script>
import ResponsiveImage from 'vue-responsive-img';
import { Image } from 'jsapi-torchiodev.com/dist/models/Image'

export default {
  name: 'ImageElement',
  components: {
    ResponsiveImage
  },
  props: {
    image: {
      // type: Image,
      required: true
    }
  },
  computed: {
    sources() {
      if (!this.image)
        return [];
        
      return this.image.srcset.map( src => {
        const { url, size:[label, size] } = src;

        return {
          url,
          [label]: size
        }
      });
    }
  }
}
</script>
<template lang="pug">
  responsive-image.img(
    :sources='sources'
  )
</template>

