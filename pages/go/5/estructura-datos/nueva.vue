<template lang="pug">
.componenteDePagina
	.contenido
		h2 Nueva estructura de datos


	#CodigoGimnasio.ancla
	.bloque
		.pretitulo.mongoDB(title="MongoDB") Colección: Gimnasios
		h3.titulo Gimnasio
		.codigos
			CodigoGimnasio

	#CodigoPerfil.ancla
	.bloque
		.pretitulo.mongoDB(title="MongoDB") Colección: Perfiles
		h3.titulo Perfil
		.codigos
			CodigoPerfil

	#CodigoInstancia.ancla
	.bloque
		.pretitulo.mongoDB(title="MongoDB") Colección: Instancias de un gimnasio
		h3.titulo Instancia
		.codigos
			CodigoInstancia

	.pieConLinks.flex.jcfe
		n-link.linkSeccion(to="/go/5/estructura-datos/ventajasDesventajas") 
			| Ventajas y desventajas
			span.oicono.adelante

</template>
<script>
import CodigoGimnasio from './-codigoGimnasio.vue'
import CodigoPerfil from './-codigoPerfil.vue'
import CodigoInstancia from './-codigoInstancia.vue'
export default {
	components: { CodigoGimnasio, CodigoPerfil, CodigoInstancia },
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
