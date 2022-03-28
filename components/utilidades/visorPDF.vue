<template lang="pug">
.rootVisorPDF
	slot(v-bind:abrir="abrir")
		a-button(@click="abrir") Abrir PDF

	a-modal.modalPropuesta(:visible="mostrandoPDF" :footer="null" @close="cerrar" @cancel="cerrar" centered :width="null")
		.titular(slot="title")
			h2.titulo {{nombre}}
			a.descarga(:href="url" download target="_blank" rel="noreferer noopener") Descargar PDF
		.cuerpoPropuesta
			.pdf
				iframe(:src='`https://docs.google.com/viewer?url=${url}&embedded=true`' frameborder='0' height='500px' width='100%')
				.porSiFalla {{$t('siFalla')}}
</template>
<script>
export default {
	name: 'VisorPDF',
	props: {
		nombre: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		},
		fecha: {
			type: Object,
			required: false,
			default: null
		}
	},
	data() {
		return {
			mostrandoPDF: null
		}
	},
	methods: {
		abrir() {
			this.mostrandoPDF = true
		},
		cerrar() {
			this.mostrandoPDF = false
		}
	},
	traducciones: {
		siFalla: {
			es: 'Bloqueadores de anuncios pueden impedir que se muestre el PDF correctamente.',
			en: 'Ad blockers can prevent the PDF from being displayed correctly.',
			pt: 'Bloqueadores de anuncios pueden impedir que se muestre el PDF corretamente.'
		}
	}
}
</script>
<style lang="sass" scoped>
//.rootVisorPDF
	display: flex
	justify-content: center
.modalPropuesta::v-deep
	.ant-modal
		width: 900px
		max-width: 100vw
		.titular
			font-size: 1rem
			.titulo
				margin-top: 1rem
			// .descarga
				font-size: 1rem
		.cuerpoPropuesta
			.pdf
				position: relative
				min-height: 200px
				z-index: 0
				iframe
					position: relative
					z-index: 1
				.porSiFalla
					position: absolute
					width: 50%
					top: 50%
					left: 50%
					transform: translate(-50%, -50%)
					text-align: center
					z-index: 0
</style>
