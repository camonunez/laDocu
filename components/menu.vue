<template lang="pug">
.componenteMenu
	a-menu(v-model='current' mode='horizontal')

		//a-menu-item(key='mail')
			a-icon(type='mail') 
			| Boxmagic GO

		a-menu-item(key='micropagos' disabled)
			| MicroPagos

		a-sub-menu
			span.submenu-title-wrapper(slot='title')
				a-icon(type=' ologo logoGo') 
			a-menu-item-group(title='Item 1')
				a-menu-item(key='setting:1')
					| Option 1
				a-menu-item(key='setting:2')
					| Option 2
			a-menu-item-group(title='Item 2')
				a-menu-item(key='setting:3')
					| Option 3
				a-menu-item(key='setting:4')
					| Option 4

		a-menu-item(key='github')
			a(href='https://github.com/camonunez' target='_blank' rel='noopener noreferrer') 
				.oicono.github
</template>
<script>
export default {
	data() {
		return {
			current: ['mail'],
		};
	},
};
</script>
<style lang="sass" scoped>
.componenteMenu
	background-color: #333
	.ologo
		font-size: 1.6em
		vertical-align: middle
		
</style>
