<template lang="pug">
.pagina.paginaEstructuraDeDatos(ref="pagina")
	.contenido
		.encabezado
			h1 Estructura de datos
			p 

	.pieConLinks.flex.jcfe
		n-link.linkSeccion(to="/go/5/estructura-datos/transformacion") Reestructuración

	.fin


</template>
<script>
export default {
	data() {
		return {}
	},
	computed: {},
	methods: {}
}
</script>
<style lang="sass" scoped>
@import '@/style/vars'
.paginaEstructuraDeDatos
	.contenido
		// border: 1px solid red
		.encabezado
			padding-bottom: 2em
		section
			margin-top: 4em
	.fin
		margin: 50em 0
</style>
