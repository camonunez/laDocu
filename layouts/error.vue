<template lang="pug">
.plantillaError
	.error
		.error404(v-if="error.statusCode === 404")
			h1(:title="$t('noEncontrada')") {{ $t('noEncontrada') }}
		.otro(v-else)
			h1(:title="$t('haOcurridoUnError')") {{ $t('haOcurridoUnError') }} 
	.alternativas
		NuxtLink(to="/") {{ $t('paginaDeInicio') }}
</template>

<script>
export default {
	layout: 'error',
	// eslint-disable-next-line
	props: ['error'],
	traducciones: {
		noEncontrada: {
			es: 'Página no encontrada',
			en: 'Page not found'
		},
		haOcurridoUnError: {
			es: 'Ha ocurrido un error',
			en: 'An error occurred'
		},

		paginaDeInicio: {
			es: 'Página de inicio',
			en: 'Home page'
		}
	}
}
</script>
<style lang="sass" scoped>
.plantillaError
	border: 1px solid red
	min-height: 100vh	
	display: flex
	flex-flow: column nowrap
	justify-content: center
	align-items: center
	.error
		h1
			position: relative
			z-index: 0
			mix-blend-mode: multiply

			&::after,
			&::before
				content: attr(title)
				position: absolute
				top: 0
				bottom: 0
				left: 0
				right: 0
				mix-blend-mode: multiply
				// opacity: .5
			$distancia: .75em
			&::before
				transform: translate(-$distancia, -$distancia) 
				color: #d66ba0
				z-index: -2
			color: #f4e4ba
			&::after
				transform: translate($distancia, $distancia) 
				color: #9df7e5
				z-index: -1

					
	.alternativas
		margin-top: 2em
</style>