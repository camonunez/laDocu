<template lang="pug">
div
  code.javascript(v-highlight="codigo") {{codigo}}
  code.javascript(v-highlight="codigo2") {{codigo2}}
</template>
<script>
function asdf (a) {
  console.log('a', a)
}

export default {
  data () {
    return {
      codigo: asdf.toString()
    }
  },
  computed: {
    codigo2 () { return this.fsda.toString() }
  },
  methods: {
    fsda (fdds, ds) {
      // DFASFD
      console.log('obj', {fdds, ds})
    }
  }
}
</script>
<style lang="sass" scoped>
.javascript
  border: 2px dashed white
</style>
