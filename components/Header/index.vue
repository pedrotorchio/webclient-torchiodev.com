<script>

export default {
  name: 'PageHeader',
  props: {
    logo: {},
    email: {
      type: String,
      required: false
    }
  }
}
</script>

<template lang="pug">
  aside

    image-element(
      :image="logo"
      :sizes=`[
        '(min-width) 80vw',
        '200px'
      ]`
    )

    nav
      ul
        a(href='#me')
          li Me
        a(href='#work')
          li Work
        a(href='#skills')
          li Skills
        a(href='#more')
          li More Me

    h4(v-text='email')
</template>

<style lang="stylus" scoped> 
@import '~assets/styles/mixins.styl';
@import '~assets/styles/theme.styl';

  aside
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img
      width: 100%;
      height: auto;
  
    nav 
      height: 50%;
      +xl()
        height: 256px;

      max-height: 512px;
      ul
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        line-height: 64px;
        a
          text-decoration: none;
          color: lightgrey;
          font-weight: 100;

          transition-property: color, font-weight;
          transition-duration: .3s;

          &.loaded
            color: inherit;
            font-weight: bold;

            &:hover
              color: highlight;
          

        li
          font-weight: 100;
          text-align: right;
          list-style: none;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: .5em;
          
    h4
      text-align: center;
      font-weight: 100;
</style>
