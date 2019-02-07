<template>
  <div class="Home">
    <vovo-juju/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    VovoJuju: () => import('@/components/VovoJuju')
  }
}
</script>

<style lang="stylus">
.Home
  width 100%
  height 100%
</style>

