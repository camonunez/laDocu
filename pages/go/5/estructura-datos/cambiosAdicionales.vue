<template lang="pug">
.componenteDePagina
	.contenido
		h2 Cambios adicionales

	.cambios
		h3 Semántica
		p En vez de hablar de Box se habla de Gimnasio
		p Se llama instancia (de clase) a la entidad correspondiente a la realización de una clase un día puntual, en un horario puntual, conteniendo la información de sus participantes y profesores.
	.cambios
		h3 Clases pueden tener un periodo de vigencia.
		p Se permite establecer un período (fecha - fecha) durante el cual la clase se impartirá. Fuera de tal período, la clase funcionará tal como si estuviera desactivada. Desactivar la clase vía el campo "activa" aún desactiva la clase por completo.


	.pieConLinks.flex.jcfe
		n-link.linkSeccion(to="/go/5/estructura-datos/nueva") Nueva estructura
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
</style>
