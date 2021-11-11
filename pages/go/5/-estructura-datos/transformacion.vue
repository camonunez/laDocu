<template lang="pug">
.componenteDePagina
	.contenido
		h2 Reestructuración de datos (Laravel a APIX)
		p De 22 tablas (SQL) se pasa a 3 colecciones (MongoDB). 
		p En vez una base de datos para toda la información, se utilizan múltiples bases de datos: #[b una única base de datos para perfiles de usuario y datos #[i perdurables] de gimnasio] (incluyendo planes, programas, clases, videos, galerias, etc). 
		p Adicionalmente, cada gimnasio tendrá una base de datos propia en la que se almacenará la información propia de las instancias de clase, con la que se pretende aislar la actividad de instancias de clases de un gimnasio de las de otro.

		br

		p Los principios u objetivos en que guían y en los que se basa esta reestructuración:
		ul
			li Optimizar el rendimiento de las operaciones más utilizadas.
			p Las operaciones agrupadas por tipo de usuario son de mayor a menor: Usuarios, Profesores, Admins.
			p La operación más frecuente es la consulta de cupos disponibles y las de clases, luego las operaciones de reserva/cancelacion, luego las de toma de clase, revisión de asistencias y finalmente, la menos frecuente, las utilizadas para conformar reportes.
			
			li Eficiencia de la base de datos: Desfragmentar información, anidarla o moverla a otra base de datos cuando haga sentido. 
			p Como el usuario de Boxmagic sólo ve un gimnasio a la vez (su gimnasio activo), separar ciertos datos como los de las reservas para una clase, fecha y horario específicos, es lógico y trae mejoras de desempeño significativas.

			li La información se debe computar sólo al haber cambios.
			p Toda información que solo cambie al hacerse una operación debe quedar guardada de forma que optimice su consulta, de este modo por mucho que se consulte, por ejemplo, la cantidad de cupos disponible para una instancia de clase, no implicará un aumento de la actividad de procesamiento.

	.bloque
		.pretitulo Se unirán en #[span.mongoDB(title="MongoDB") documentos de la colección] de
		h3.titulo Gimnasios
		.tablas
			.tabla(v-for="nombre in 'box tipo_box tipo pais planes programas planes_programas clases dias_clases gallery video video_programas eventos feriados'.split(' ')")
				.nombreTabla {{nombre}}
				.placeholderFilas ...

	.bloque
		.pretitulo Se unirán en #[span.mongoDB(title="MongoDB") documentos de la colección] de
		h3.titulo Perfiles de usuario
		.tablas
			.tabla(v-for="nombre in 'users box_usuario role_user mensualidad pago_mensualidad reservas'.split(' ')")
				.nombreTabla {{nombre}}
				.placeholderFilas ...

	.bloque
		.pretitulo Se unirán en #[span.mongoDB(title="MongoDB") documentos de la colección] de
		h3.titulo Instancias de clase
		.tablas
			.tabla(v-for="nombre in 'cupos_reservas reservas'.split(' ')")
				.nombreTabla {{nombre}}
				.placeholderFilas ...

	.bloque
		.pretitulo Se pasará al
		h3.titulo Código del back-end (API X)
		.tablas
			.tabla(v-for="nombre in 'roles pais'.split(' ')")
				.nombreTabla {{nombre}}
				.placeholderFilas ...


</template>
<script>
export default {
	data() {
		return {}
	},
	computed: {},
	methods: {}
}
</script>
<style lang="sass" scoped>
@import '@/style/vars'
.componenteDePagina
	.bloque
		background: hsla(0, 0%, 100%, .2)
		backdrop-filter: blur(.3em)
		+radio
		margin-top: 2em
		padding: 2em
		.titulo
			margin-bottom: 1remem
			+black
		.mongoDB
			color: #589636
	.tablas
		z-index: 1
		// border: 2px dashed gray
		display: flex
		flex-flow: row wrap
		.tabla
			background-color: #ddd
			margin: 0.5em
			.nombreTabla
				padding: .5em 1em
				font-weight: bold
				background-color: #fff
			.placeholderFilas
				color: #666
				text-align: center
				padding: .5em 1em
</style>
