<template lang="pug">
.componenteDePagina
	.contenido
		h2 Ventajas y desventajas

	.ventajas
		h3 Ventajas
		ul
			li Significativa reducción de consultas a base de datos.
			li Significativa reducción de capacidad de procesamiento de base de datos.
			li No es necesario utilizar una base de datos externa al servidor en que se encuentra la app, se elimina el tráfico de datos entre ambos elementos, se reduce latencia de datos.
			li Significativa reducción de costos de base de datos.
			li Las consultas de clases, reservas y cancelaciones de un gimnasio no afectan a otro.
			li Es posible contabilizar desempeño por gimnasio, para aquellos que lo necesiten por motivos de mucha actividad propia, se puede ofrecer mejoras de desempeño al mover la base de datos a un servidor más potente, por un precio adicional.

</template>
<script>
export default {
	data () {
		return {}
	},
	computed: {},
	methods: {}
}
</script>
<style lang="sass" scoped>
@import '@sass/comun'
// .paginaEstructuraDeDatos
</style>
