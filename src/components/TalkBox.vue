<template>
  <div class="TalkBox">
    <figure class="TalkBox__image">
      <img :src="imageSrc" :alt="imageAlt">
    </figure>
    <div class="TalkBox__box" v-html="htmlBox"/>
  </div>
</template>

<script>
export default {
  name: 'TalkBox',
  props: {
    imageSrc: {
      type: String,
      default: '../assets/vovo.png'
    },
    imageAlt: {
      type: String,
      default: 'Ai que linda a Vovó Juju, bem!'
    },
    htmlBox: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.TalkBox
  position relative
  z-index 100
  max-width 43.75rem /* 700/16 */
  display flex
  flex-direction column-reverse
  @media screen and (min-width: 768px)
    flex-direction row
    align-items flex-start
    justify-content center
  &__image
    margin 0
    padding 0
    text-align center
  &__box
    background-color #fff
    padding .625rem /* 10/16 */ 1.875rem /* 30/16 */
    box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    transition all 0.3s cubic-bezier(.25,.8,.25,1)
    border-bottom 1px solid #ddd
    display block
    position relative
    border-radius 8px
    font-size 1.25rem /* 20/16 */
    margin 0 0 1.875rem /* 30/16 */
    @media screen and (min-width: 768px)
      margin 3.125rem /* 50/16 */ 0 0
      display table-cell
    &:after
      content ''
      position absolute
      @media screen and (min-width: 768px)
        left -.75rem /* 12/16 */
        top 2.5rem /* 40/16 */
        border-right .75rem /* 12/16 */ solid #fff
        border-top .75rem /* 12/16 */ solid transparent
        border-bottom .75rem /* 12/16 */ solid transparent
</style>
