<template>
  <div class="VovoJuju" :style="`background-image: url(${require(`../assets/${vovoImage()}`)})`">
    <div class="VovoJuju__inner">
      <header class="VovoJuju__header">
        <h1>Gerador de falas da <strong>Vovó Juju</strong> <small>(Irmão do Jorel)</small></h1>
      </header>
      <talk-box
        :imageSrc="`${require('../assets/vovo.png')}`"
        imageAlt="Ai que linda a Vovó Juju, bem!"
        :htmlBox="html"
      >
        <button class="VovoJuju__button" v-on:click="generate">
          Fala comigo Vovó Juju!
        </button>
      </talk-box>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import loremIpsum from 'lorem-ipsum'
import Falas from '../data/falas.js'

export default {
  name: 'VovoJuju',
  components: {
    TalkBox: () => import('@/components/TalkBox')
  },
  data() {
    return {
      html: 'text',
      formatSelected: 'html',
      formatOptions: ['text', 'html'],
      paragraphLength: [{
        label: 'short',
        count: 1
      }, {
        label: 'medium',
        count: 5
      }, {
        label: 'long',
        count: 10
      }],
      paragraphLengthSelected: 1,
      numberOfParagraphs: 1
    }
  },
  created () {
    this.setImages([
      'vovojuju.jpg',
      'vovo-irmao-do-jorel.jpg',
      'vovo-abacate.png',
      'vovo-raper.jpg',
      'vovo-raper2.jpg'
    ])
    this.setTalks(Falas)
    this.generate()
    window.addEventListener('keyup', this.generate)
  },
  computed: {
    ...mapState({
      talks: state => state.talks,
      images: state => state.images
    })
  },
  methods: {
    shuffleArray (arr) {
      return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
    },
    vovoImage () {
      return this.shuffleArray(this.images)[0]
    },
    generate () {
      var output = loremIpsum({
        count: this.numberOfParagraphs,
        units: 'paragraphs',
        sentenceLowerBound: 1,
        sentenceUpperBound: 1,
        paragraphLowerBound: 1,
        paragraphUpperBound: this.paragraphLengthSelected,
        format: this.formatSelected,
        words: this.talks
      })
      this.html = output
    },
    ...mapActions([
      'setImages',
      'setTalks'
    ])
  }
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
    @media screen and (min-width: 768px)
      padding 1.25rem /* 20/16 */
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
