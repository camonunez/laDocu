<template lang="pug">
a-config-provider(:locale="localeAnt")
	div.loEscrolleable
		Menu.elMenu
		Nuxt.elContenido
		PieDePagina
</template>
<script>

import esEs from 'ant-design-vue/lib/locale-provider/es_ES'
export default {
	computed: {
		localeAnt () { return esEs }
	}
}
</script>
<style lang="sass" scoped>
@import '@/style/vars'
.elMenu
	position: sticky
	top: 0
// .elContenido

</style>