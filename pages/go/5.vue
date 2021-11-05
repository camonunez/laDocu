<template lang="pug">
.subplantilla.subplantillaGo5
	.barraLinks
		n-link.link(to="/go/5/estructuraDeDatos") Estructura de datos
		n-link.link(to="/go/5/flujosReservas") Flujos de reservas
	n-child.hijo
</template>
<script>
export default {}
</script>
<style lang="sass" scoped>
@import '@/style/vars'
.barraLinks
	padding: .5em 2em
	background-color: transparentize(white, .7)
	backdrop-filter: blur(.3em)

	position: sticky
	top: $alturaMenu

	display: flex
	.link
		display: block
		margin: 0 .5em
		+fwb

.hijo
	margin: 0 auto
	width: 900px
	max-width: 100%
	padding: 2em
</style>
