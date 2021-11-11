<template lang="pug">
a-config-provider(:locale="localeAnt")
	div
		.unaPantallaDeAlturaOMas
			ElMenu.elMenu
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
	z-index: 0
	.elMenu
		flex: auto 0 0
		position: sticky
		top: 0
		z-index: 200
	.elContenido
		position: relative
		flex: auto 1 0
		z-index: 0
.elPie
	position: relative
	z-index: 100

</style>