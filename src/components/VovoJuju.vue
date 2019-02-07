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
      ></talk-box>
      <button class="VovoJuju__button" v-on:click="generate">Fala comigo Vovó Juju!</button>
    </div>
  </div>
</template>

<script>
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
  created: function() {
    this.generate()
    // window.addEventListener('keyup', this.generate)
  },
  methods: {
    shuffleArray (arr) {
      return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
    },
    vovoImage () {
      const images = [
        'vovojuju.jpg',
        'vovo-irmao-do-jorel.jpg',
        'vovo-abacate.png',
        'vovo-raper.jpg',
        'vovo-raper2.jpg'
      ]
      return this.shuffleArray(images)[0]
    },
    copy () {
      var textArea = document.createElement('textarea')
      document.body.appendChild(textArea)
      textArea.value = this.html
      textArea.select()
      try {
        document.execCommand('copy')
      } catch (err) {
        console.log('error')
      }
      document.body.removeChild(textArea)
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
        words: Falas
      })
      this.html = output
    }
  }
}
</script>

<style lang="stylus" scoped>
.VovoJuju
  width 100%
  height 100%
  margin-left auto
  margin-right auto
  display flex
  align-items center
  justify-content center
  background-position 50%
  background-repeat no-repeat
  background-size cover
  &:before
    content ''
    display block
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
    background rgba(#BAE6EB, .9)
    z-index 10
  &__inner
    position relative
    z-index 100
  &__header
    margin-bottom 3.75rem /* 60/16 */
    h1
      text-align center
      text-transform uppercase
      font-weight 400
      small
        display block
  &__button
    padding 0.65em 1.55em
    border-radius 6px
    display inline-block
    color #242424
    transition all 0.15s ease
    box-sizing border-box
    border 1px solid #242424
    margin 1em 0
    font-size .9em
    font-weight 600
    letter-spacing 0.1em
    text-transform uppercase
    cursor pointer
    background-color #C3EAEE
</style>
