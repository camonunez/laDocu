<template lang="pug">
.componenteDePagina
	.contenido
		h2 Nueva estructura de datos


	.bloque
		.pretitulo.mongoDB(title="MongoDB") Colección: Gimnasios
		h3.titulo Gimnasio
		.codigos

			Codigo.
				calcularPosibilidadesDeReserva(Gimnasio, Usuario.membresias, { claseID, horarioID, fecha }, opciones = {})


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
// .paginaEstructuraDeDatos
.bloque
	background: hsla(0, 0%, 100%, .2)
	backdrop-filter: blur(.3em)
	+radio
	margin-top: 2em
	padding: 2em
	.titulo
		margin-bottom: 1remem
		+black
	.mongoDB
		color: #589636
		+bold
</style>
