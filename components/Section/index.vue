<template lang="pug">
  section
    div(:class='classes')
      slot
</template>

<script>
export default {
  name: "SectionContainer",
  props: {
    classes: {
      type: String,
      default: ''
    }
  }
}
</script>
