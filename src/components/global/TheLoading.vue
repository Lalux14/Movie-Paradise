<template>
  <!--higher priority than dialog-->
  <v-overlay
    :value="$store.state.loading"
    style="z-index: 998"
  >
    <v-progress-circular
      :size="70"
      :width="7"
      :color="colors[index]"
      indeterminate
    />
  </v-overlay>
</template>

<script>
export default {
  name: 'TheLoading',
  data () {
    return {
      colors: ['red', 'purple', 'blue', 'green', 'amber'],
      index: 0,
      pid: undefined
    }
  },
  mounted () {
    this.pid = setInterval(() => {
      if (this.index === this.colors.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
    }, 1500)
    // auto close after 15s, note: axios will close it when timeout, here is just for in case
    setTimeout(() => {
      this.$store.commit('CLOSE_LOADING')
    }, 15000)
  },
  destroyed  () {
    clearInterval(this.pid)
  }
}
</script>

<style scoped>

</style>
