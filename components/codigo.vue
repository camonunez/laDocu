<template lang="pug">
.rootPrism
	pre.line-numbers(:class="`language-${lang}`")
		code
			slot
</template>
<script>
// import {Prism} from '~/plugins/prism'
export default {
	props: {
		lang: {
			type: String,
			required: false,
			default: 'js'
		}
	},
	data () {
		return {
			montado: null
		}
	},
	mounted() {
		this.montado = true
		this.$nextTick(() => {
			this.$prism.highlightAll()
		})
		
	}
}
</script>
<style lang="sass" scoped></style>
