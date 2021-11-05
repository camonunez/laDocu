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

		a-sub-menu
			span.submenu-title-wrapper(slot='title')
				n-link(to="/go/5")
					a-icon(type=' ologo go') 

			//a-menu-item(key='go5')
				n-link(to="/go/5") index

			a-menu-item(key='go5-reservacion')
				n-link(to="/go/5/reservacion")  Reservacion

			//a-menu-item-group(title='Item 2')
				a-menu-item(key='setting:3')
					| Option 3
				a-menu-item(key='setting:4')
					| Option 4

		

	a-menu.separador(mode='horizontal')
	a-menu(mode='horizontal')
		a-menu-item(key='github')
			a(href='https://github.com/camonunez' target='_blank' rel='noopener noreferrer') 
				.oicono.github
</template>
<script>
export default {
	data() {
		return {
			current: ['mail'],
			// links: {
			// 	go5
			// }
		}
	},
	watch: {
		$route (v) {
			this.current = [v.name]
		}
	},
	mounted () {
		this.current = [this.$route.name]
	}
};
</script>
<style lang="sass" scoped>
@import '@/style/vars'
.componenteMenu
	background-color: #333
	display: flex
	height: $alturaMenu
	// justify-content: space-between
	.separador
		flex: auto 1 1
		//border: 1px solid cyan
	.oicono,
	.ologo
		font-size: 1.6em
		vertical-align: middle
		
</style>
