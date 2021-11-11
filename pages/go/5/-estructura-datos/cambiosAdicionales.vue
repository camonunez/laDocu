<template lang="pug">
.componenteDePagina
	.contenido
		h2 Cambios adicionales

	.cambios
		h4 Semántica
		p Box -> Gimnasio
	.cambios
		h4 Gimnasio > Clases
		p Se permite establecer un período (fecha - fecha) durante el cual la clase se impartirá. Fuera de tal período, la clase funcionará tal como si estuviera desactivada.

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
