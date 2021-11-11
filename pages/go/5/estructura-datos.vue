<template lang="pug">
.pagina.paginaEstructuraDeDatos(ref="pagina")
	.contenido
		.encabezado
			h1 Estructura de datos
			p 

		.secciones
			section
				#antigua.ancla
				antigua
			section
				#transformacion.ancla
				transformacion
			section
				#nueva.ancla
				nueva
			section
				#cambiosAdicionales.ancla
				cambiosAdicionales
			section
				#ventajasDesventajas.ancla
				ventajasDesventajas

		.fin


</template>
<script>
import antigua from './-estructura-datos/antigua'
import transformacion from './-estructura-datos/transformacion'
import nueva from './-estructura-datos/nueva'
import cambiosAdicionales from './-estructura-datos/cambiosAdicionales.vue'
import ventajasDesventajas from './-estructura-datos/ventajasDesventajas'
export default {
	components: { antigua, transformacion, nueva, cambiosAdicionales, ventajasDesventajas },
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
		.ancla
			//border: 1px solid cyan
			//padding: 0.2em
			position: relative
			top: calc(-2em - $alturaMenu)
		.encabezado
			padding-bottom: 2em
		section
			margin-top: 4em
	.fin
		margin: 50em 0
</style>
