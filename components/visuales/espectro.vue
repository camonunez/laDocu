<template lang="pug">
.root
	h1 Logo
	.zonaLogoLaDocu
		.logoLaDocu
			.espectro

</template>
<script>
export default {}
</script>
<style lang="sass" scoped>
@import '@sass/comun'
.zonaLogoLaDocu
	border: 1px solid black
	.logoLaDocu,
	.espectro
		height: 10em
		width: 30em
	.logoLaDocu
		mask-image: radial-gradient(ellipse at center left, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 75%)
		mask-size: 98% 101%
		mask-position: center
		mask-repeat: no-repeat
		perspective: 0px
		perspective-origin: -1% 50%
		border: 1px solid teal

	.espectro
		background-size: 100% 100%
		background-image: url(/img/espectro.svg)
		background-repeat: no-repeat
		// border: 1px solid red
		transform: scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(-15deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg)
		transform: scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(-15deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg)
</style>
