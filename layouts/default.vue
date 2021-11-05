<template lang="pug">
a-config-provider(:locale="localeAnt")
	div
		.unaPantallaDeAlturaOMas
			Menu.elMenu
			Nuxt.elContenido
		PieDePagina.elPie
</template>
<script>

import esEs from 'ant-design-vue/lib/locale-provider/es_ES'
export default {
	computed: {
		localeAnt () { return esEs }
	}
}
</script>
<style lang="sass" scoped>
@import '@/style/vars'
.unaPantallaDeAlturaOMas
	min-height: 100vh
	display: flex
	flex-flow: column nowrap
	.elMenu
		flex: auto 0 0
		position: sticky
		top: 0
	.elContenido
		flex: auto 1 0
.elPie
	flex: auto 0 0

</style>