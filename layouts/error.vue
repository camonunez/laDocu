<template lang="pug">
.plantillaError
	.error
		.error404(v-if="error.statusCode === 404")
			h1(title="") Page not found
		.otro(v-else)
			h1 An error occurred
	.alternativas
		NuxtLink(to="/") Home page
</template>

<script>
export default {
	layout: 'error',
	// eslint-disable-next-line
	props: ['error']
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
			&::after,
			&::before
				content: attr(title)
					
	.alternativas
		margin-top: 2em
</style>