<template>
  <div class="VovoJuju" :style="`background-image: url(${vovoImage()})`">
    <div class="VovoJuju__inner">
      <header class="VovoJuju__header">
        <h1>Gerador de falas da <strong>Vovó Juju</strong> <small>(Irmão do Jorel)</small></h1>
      </header>
      <talk-box :imageSrc="`${require('@/assets/vovo.png')}`" :imageAlt="talk" :htmlBox="talk">
        <button class="VovoJuju__button" v-on:click="generate">
          Fala comigo Vovó Juju!
        </button>
      </talk-box>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'VovoJuju',
  components: {
    TalkBox: () => import('@/components/TalkBox'),
  },
  data: () => ({ talk: null }),
  created() {
    this.setTalks()
      .then(() => this.generate())
      .catch(() => this.generate())
  },
  computed: {
    ...mapState({
      talks: ({ talks }) => talks,
      images: ({ images }) => images,
    }),
  },
  methods: {
    ...mapActions(['setTalks']),
    shuffle(arr) {
      return arr
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
    },
    vovoImage() {
      return this.shuffle(this.images)[0] || this.images[0]
    },
    generate() {
      this.talk = this.shuffle(this.talks)[0]
    },
  },
}
</script>

<style lang="stylus" scoped>
.VovoJuju
  width 100%
  background-position 50%
  background-repeat no-repeat
  background-size cover
  display flex
  @media screen and (min-width: 768px)
    height 100%
    align-items center
    justify-content center
  @media screen and (max-width: 768px)
    padding-bottom 60px
  &:before
    content ''
    display block
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    background rgba(#BAE6EB, .9)
    z-index 10
  &__inner
    position relative
    z-index 100
    padding 1.25rem /* 20/16 */
    @media screen and (max-width: 768px)
      text-align center
  &__header
    margin 1.875rem /* 30/16 */ 0
    h1
      text-align center
      text-transform uppercase
      font-weight 400
      font-size 1.75rem /* 28/16 */
      small
        display block
      @media screen and (min-width: 768px)
        font-size 2.375rem /* 38/16 */
  &__button
    padding 0.65em 1.55em
    border-radius 6px
    display inline-block
    color #242424
    transition all 0.15s ease
    box-sizing border-box
    border 1px solid darken(#EBE3D9, 15%)
    margin 1em 0
    font-size .9em
    font-weight 600
    letter-spacing 0.1em
    text-transform uppercase
    cursor pointer
    background-color #EBE3D9
</style>
