<template>
  <div class="TalkBox">
    <figure class="TalkBox__image">
      <img :src="imageSrc" :alt="htmlBox" />
    </figure>
    <div>
      <div class="TalkBox__box">
        <p v-text="htmlBox" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TalkBox',
  props: {
    imageSrc: {
      type: String,
      default: '~/assets/vovo.png',
    },
    imageAlt: {
      type: String,
      default: 'Ai que linda a Vovó Juju, bem!',
    },
    htmlBox: {
      type: String,
      require: true,
    },
  },
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
    img
      width 100%
  &__box
    background-color #fff
    padding .625rem /* 10/16 */ 1.875rem /* 30/16 */
    // box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
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
    &:before,
    &:after
      pointer-events none
      position absolute
      content " "
      height 0
      width 0
      border solid transparent
      @media screen and (max-width: 768px)
        top 100%
        left 50%
      @media screen and (min-width: 768px)
        right 100%
        top 50%
    &:before
      @media screen and (max-width: 768px)
        border-color rgba(221, 221, 221, 0)
        border-top-color #ddd
        border-width 13px
        margin-left -13px
      @media screen and (min-width: 768px)
        border-color rgba(221, 221, 221, 0)
        border-right-color #ddd
        border-width 13px
        margin-top -13px
    &:after
      @media screen and (max-width: 768px)
        border-color rgba(255, 255, 255, 0)
        border-top-color #fff
        border-width 12px
        margin-left -12px
      @media screen and (min-width 768px)
        border-color rgba(255, 255, 255, 0)
        border-right-color #fff
        border-width 12px
        margin-top -12px
</style>
