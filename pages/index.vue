<template lang="pug">
.pagina.paginaIndex
  .anchoWrapper.py2rem
    h1.tac.aMano.fz5rem Las docus

    .tarjetas
      .tarjeta.p2rem.mt2rem.anchoComun.radio.sombra(v-for="(docu, docuID) in docus")
        .flex.jcsb.aic
          .nombre.bold.fz2rem {{docu.nombre}}
          n-link(:to="docu.path")
            .oicono.flecha.fz3rem


</template>

<script>
export default {
	data () {
		return {
			docus: {
				go5: {
					nombre: 'Go 5',
					path: '/go/5'
				},
				micropagos: {
					nombre: 'MicroPagos',
					path: '/micropagos'
				},
				servers: {
					nombre: 'Servidores',
					path: '/servers'
				}
			}
		}
	}
}
</script>
<style lang="sass" scoped>
@import '@sass/comun'
</style>
