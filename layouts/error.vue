<template lang="pug">
.plantillaError

	//- .imagen(style="background-image: url('/img/tornado-fuego.jpg')")
	//- .emoji 💨
	OsoCoder

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
	name: 'Error',
	layout: 'nada',
	// eslint-disable-next-line
	props: ['error'],
	traducciones: {
		noEncontrada: {
			es: 'No encontrada',
			en: 'Not found'
		},
		haOcurridoUnError: {
			es: 'Chucha!',
			en: 'Error!'
		},

		paginaDeInicio: {
			es: 'Inicio',
			en: 'Home page'
		}
	}
}
</script>
<style lang="sass" scoped>
@import '@/style/vars'

.plantillaError
	border: 1px solid red
	min-height: 100vh	
	display: flex
	flex-flow: column nowrap
	justify-content: center
	align-items: center

	.imagen
		width: 10em
		height: 10em
		+bgcov
	
	.emoji
		font-size: 4em

	// .osoCoder
		opacity: .5

	.error
		h1
			position: relative
			z-index: 0
			mix-blend-mode: multiply
			margin: 1em

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
				color: #96c3ce
				z-index: -2
			color: #a79ab2
			&::after
				transform: translate($distancia, $distancia) 
				color: #b57ba6
				z-index: -1

					
	.alternativas
		margin-top: 2em
</style>