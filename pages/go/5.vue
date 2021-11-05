<template lang="pug">
.subplantilla.subplantillaGo5
	.barraLinks
		.link
			n-link(to="/go/5/reservacion") Reservación
	n-child
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
</style>
