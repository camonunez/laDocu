<template lang="pug">
a-config-provider(:locale="localeAnt")
	div
		Menu
		Nuxt
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

</style>