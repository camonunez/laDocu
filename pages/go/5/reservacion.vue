<template lang="pug">
.paginaApiXIndex
	.contenido
		h2 Flujo de reserva de una clase

		.funcion
			Codigo reservar(perfil, instanciaID, [membresiaID = null])
			.descripcion Realiza todas las validaciones, ejecuta los cambios que implica una reserva en el registro del usuario y de la instancia de clase correspondiente.

			.pasos
				.titulo Detalle descriptivo
				.paso Se rechaza reserva si el perfil tiene un estado inactivo, suspendido o congelado.

				.subtitulo 
				.paso Se obtiene el ID del gimnasio activo del documento del perfil del usuario.
				.paso Se busca la instancia para la que se desea hacer la reserva en la base de datos del gimnasio. Si no existe se rechaza.
				.paso Si no existe la clase o el horario que indica la instancia, se rechaza.
				.paso Se verifica que se esté reservando antes de que termine la clase.
				br
				.paso Si el gimnasio establece un tiempo de apertura para reservas; se puede reservar desde esos minutos antes de la hora de inicio de la clase. Se rechaza si se está reservando antes del plazo.
				.paso Si el gimnasio establece un tiempo minimo de antelaciónpara reservas; se puede reservar hasta esos minutos antes de la hora de inicio de la clase. Se rechaza si se está reservando después del plazo.
				pre [INSERTAR GRAFICO DE TIEMPO]
				br
				.paso Se revisa si ya se ha reservado revisando la información de participantes de la instancia. Si no se indica membresía a utilizar (con membresiaID), se rechaza si el usuario ya tiene una reserva para la instancia. Por otro lado, si se indica una membresía a utilizar, sólo se rechazará si el usuario ya tiene una reserva con *esa* membresía. En caso de rechazarse, se responde como si la reserva hubiera sido exitosa, con los datos de la reserva existente.
				.paso Se revisa que queden cupos para la instancia, según la cantidad de participantes y el límite de cupos del horario.

				.subtitulo 
				.paso Si no se indica membresía a utilizar, se utiliza  #[span.fx laReservaIdonea] 
				.paso Si se indica membresía a utilizar, se utiliza  #[span.fx calcularPosibilidadesDeReserva] 
				br
				.paso Si se indica membresía a utilizar, se utiliza  #[span.fx calcularPosibilidadesDeReserva] 

			.argumentos
				.titulo Argumentos
				.argumento
					span.nombre perfil
					span.tipo (objeto)
					span.descripcion Documento del perfil correspondiente al usuario conectado, contiene, entre otros, info del gimnasio activo, membresías y pagos
				.argumento
					span.nombre instanciaID
					span.tipo (string)
					span.descripcion Identificador de la instancia de clase correspondiente a una clase, horario y fecha específica.
				.argumento
					span.nombre membresiaID
					span.tipo (string)
					span.descripcion #[span.opcional opcional] Identificador de la membresía a utilizar 
			.retornos
				.titulo Retorna
				.retorno
					span.nombre perfil
					span.tipo (objeto)
					span.descripcion Documento 


		.funcion
			Codigo laReservaIdonea (gimnasio, membresias, { claseID, horarioID, fecha })
			.descripcion Para una
		

		.funcion
			Codigo calcularPosibilidadesDeReserva(Gimnasio, Usuario.membresias, { claseID, horarioID, fecha }, opciones = {})
			.descripcion Para una





		br
		br
		br
		br


		div
			| recalcularPosibilidadesDeReserva (Gimnasio, Usuario.membresias, { claseID, horarioID, fecha }, opciones = {})
			| function calcularPosibilidade () {};
			| const asdf = 3;
			| calcularPosibilidade.sDeReserva(Gimnasio, Usuario.membresias, { claseID, horarioID, fecha }, opciones = {})
</template>
<script>
const codigo = `function calcularPosibilidade () {};
const asdf = 3;
calcularPosibilidade.sDeReserva(Gimnasio, Usuario.membresias, { claseID, horarioID, fecha }, opciones = {})`
export default {
	data() {
		return {
			codigo
		}
	},
	computed: {
		codigo2() {
			return this.fsda.toString()
		}
	},
	methods: {
		fsda(fdds, ds) {
			// DFASFD
			console.log('obj', { fdds, ds })
		}
	}
}
</script>
<style lang="sass" scoped>
@import '@/style/vars'
.paginaApiXIndex
	padding: 5em
.funcion
	+ .funcion
		margin-top: 3em
	> .descripcion
		margin-bottom: 2em

	.pasos,
	.argumentos,
	.retornos
		+ .pasos,
		+ .argumentos,
		+ .retornos
			margin-top: 1em
	.pasos,
	.argumentos,
	.retornos
		.titulo
			font-size: 1.2em
		.subtitulo
			+fwb
		.argumento,
		.retorno,
		.paso
			padding-left: 2em
			.nombre,
			.tipo
				color: #0075A2
				+fwb
			.nombre
				&::after
					content: ' '
			.tipo
				font-style: italic
				&::after
					content: ': '
					color: initial
			.opcional
				font-style: italic
				+fwb
				opacity: .5
</style>
