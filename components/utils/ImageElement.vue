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
      
      return this.image.srcset.map( ({ url, size:[label, size] }) => ({url , [label]: size}) );
    }
  }
}
</script>
<template lang="pug">
  responsive-image.img( v-if='image'
    :sources='sources'
  )
</template>

