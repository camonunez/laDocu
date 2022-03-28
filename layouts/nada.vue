<template lang="pug">
a-config-provider(:locale="localeAnt")
	Nuxt
</template>
<script>
import esEs from 'ant-design-vue/lib/locale-provider/es_ES'
export default {
	name: 'Nada',
	computed: {
		localeAnt() {
			return esEs
		}
	}
}
</script>
<style lang="sass" scoped></style>
