<template lang="pug">
.componenteMenu
	a-menu(v-model='current' mode='horizontal')

		a-menu-item(key='home')
			n-link(to="/")
				b La Docu

		//a-menu-item(key='actual' disabled)
			| | {{$route.name}} |

		a-menu-item(key='micropagos')
			n-link(to="/micropagos") MicroPagos

		a-menu-item(key='go-5')
			n-link(to="/go/5")
				a-icon(type=' ologo go')



	a-menu.separador(mode='horizontal')
	a-menu(mode='horizontal')
		a-menu-item(key='github')
			a(href='https://github.com/camonunez' target='_blank' rel='noopener noreferrer')
				.oicono.github
</template>
<script>
export default {
	data () {
		return {
			current: []
			// links: {
			// 	go5
			// }
		}
	},
	watch: {
		$route (v) {
			if (this.current.length === 1 && this.current[0] !== v.name && v.name.startsWith(`${this.current[0]}-`)) return
			if (v.name.startsWith('go-5-')) this.current = ['go-5']
			else this.current = [v.name]
		}
	},
	mounted () {
		if (this.$route.name.startsWith('go-5-')) this.current = ['go-5']
		else this.current = [this.$route.name]
	}
}
</script>
<style lang="sass" scoped>
@import '@sass/comun'
.componenteMenu
	background-color: #333
	display: flex
	// height: $alturaMenu
	// justify-content: space-between
	.separador
		flex: auto 1 1
		//border: 1px solid cyan
	.oicono,
	.ologo
		font-size: 1.6em
		vertical-align: middle

</style>
