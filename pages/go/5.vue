<template lang="pug">
.subplantilla.subplantillaGo5
	.fondo
		.imagen
	.navegador
		n-link.link(to="/go/5/estructura-datos") Estructura de datos
		router-link(to='/go/5/estructura-datos' v-slot='{ href, route, navigate, isActive, isExactActive }' custom)
			transition(:duration="300")
				.linksSeccion(v-if="isActive")
					n-link.linkSeccion(to="/go/5/estructura-datos/antigua") Antigua estructura
					n-link.linkSeccion(to="/go/5/estructura-datos/transformacion") Reestructuración
					n-link.linkSeccion(to="/go/5/estructura-datos/cambiosAdicionales") Cambios adicionales

					n-link.linkSeccion(to="/go/5/estructura-datos/nueva") Nueva estructura
					n-link.linkSeccion.sublink(to="/go/5/estructura-datos/nueva#CodigoGimnasio") Gimnasio
					n-link.linkSeccion.sublink(to="/go/5/estructura-datos/nueva#CodigoPerfil") Perfil
					n-link.linkSeccion.sublink(to="/go/5/estructura-datos/nueva#CodigoInstancia") Instancia

					n-link.linkSeccion(to="/go/5/estructura-datos/ventajasDesventajas") Ventajas y desventajas

		n-link.link(to="/go/5/flujos-reservas") Flujos de reservas

	n-child.hijo
</template>
<script>
export default {}
</script>
<style lang="sass" scoped>
@import '@sass/comun'
.subplantillaGo5
	display: flex
	position: relative
	.fondo
		position: sticky
		top: 0
		align-self: flex-start // Fix para que funque el sticky con flex
		// height: calc(100vh - $alturaMenu)
		// perspective: 1px
		// perspective-origin: 100% 100%
		.imagen
			content: ''
			display: block
			position: absolute
			// top: $alturaMenu
			top: 0
			left: 0
			width: 100vw
			height: 100vh
			// height: calc(100vh - $alturaMenu)
			&::before
				content: ''
				display: block
				width: 100%
				height: 100%
				+bgcov
				background-image: url(/img/nubes.svg)
				// background-attachment: fixed
				opacity: .7


	.navegador
		z-index: 2
		flex: 16em 0 0
		// padding: calc(.5em + $alturaMenu) 2em
		background-color: transparentize(white, .7)
		backdrop-filter: blur(.3em)

		position: sticky
		// top: $alturaMenu
		align-self: flex-start // Fix para que funque el sticky con flex
		// height: calc(100vh - $alturaMenu)


		.link
			display: block
			margin: .5em 0

			user-select: none
		.linksSeccion
			padding-left: 1em
			padding-bottom: 2em
			+saliendo
				max-height: 100vh
				overflow: hidden
			+salir
				opacity: 0
				max-height: 0
			.linkSeccion
				display: block
				margin: 0.25em 0
				&.sublink
					padding-left: 1em


	.hijo
		// width: 900px
		min-width: 0
		max-width: 100%
		flex: 900px 1 1
		z-index: 1
		margin: 0 auto
		padding: 2em
</style>
