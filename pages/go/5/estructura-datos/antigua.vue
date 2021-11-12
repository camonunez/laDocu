<template lang="pug">
.componenteDePagina
	.contenido
		h2 Estructura de datos utilizada en Laravel

	.tablas
		.tabla.users 
			.nombreTabla users
			.placeholderFilas ...
		.tabla.box_usuario 
			.nombreTabla box_usuario
			.placeholderFilas ...
		.tabla.mensualidad 
			.nombreTabla mensualidad
			.placeholderFilas ...
		.tabla.roles 
			.nombreTabla roles
			.placeholderFilas ...
		.tabla.role_user 
			.nombreTabla role_user
			.placeholderFilas ...
		.tabla.pais 
			.nombreTabla pais
			.placeholderFilas ...
		.tabla.box 
			.nombreTabla box
			.placeholderFilas ...
		.tabla.tipo_box 
			.nombreTabla tipo_box
			.placeholderFilas ...
		.tabla.tipo 
			.nombreTabla tipo
			.placeholderFilas ...
		.tabla.programas 
			.nombreTabla programas
			.placeholderFilas ...
		.tabla.clases 
			.nombreTabla clases
			.placeholderFilas ...
		.tabla.planes 
			.nombreTabla planes
			.placeholderFilas ...
		.tabla.planes_programas 
			.nombreTabla planes_programas
			.placeholderFilas ...
		.tabla.gallery 
			.nombreTabla gallery
			.placeholderFilas ...
		.tabla.videos_programas 
			.nombreTabla videos_programas
			.placeholderFilas ...
		.tabla.video 
			.nombreTabla video
			.placeholderFilas ...
		.tabla.eventos 
			.nombreTabla eventos
			.placeholderFilas ...
		.tabla.feriados 
			.nombreTabla feriados
			.placeholderFilas ...
		.tabla.dias_clases 
			.nombreTabla dias_clases
			.placeholderFilas ...
		.tabla.cupos_reservas 
			.nombreTabla cupos_reservas
			.placeholderFilas ...
		.tabla.reservas 
			.nombreTabla reservas
			.placeholderFilas ...
		.tabla.pago_mensualidad 
			.nombreTabla pago_mensualidad
			.placeholderFilas ...

	.pieConLinks
		.flex.jcfe
			n-link.linkSeccion(to="/go/5/estructura-datos/transformacion") 
				| Reestructuración
				span.oicono.adelante


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
.componenteDePagina
	.tablas
		border: 2px dashed gray
		padding: 2em
		display: flex
		flex-flow: row wrap
		.tabla
			background-color: #ddd
			margin: 0.5em
			.nombreTabla
				padding: .5em 1em
				font-weight: bold
				background-color: #fff
			.placeholderFilas
				color: #666
				text-align: center
				padding: .5em 1em


</style>
