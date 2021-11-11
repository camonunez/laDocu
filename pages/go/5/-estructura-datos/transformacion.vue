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
		.pretitulo Se unirán en #[span.mongoDB(title='MongoDB') documentos de la colección] de
		h3.titulo Gimnasios
		.tablas
			.tabla(
				v-for='nombre in "box tipo_box tipo pais planes programas planes_programas clases dias_clases gallery video video_programas eventos feriados".split(" ")'
			)
				.nombreTabla {{ nombre }}
				.placeholderFilas ...

	.bloque
		.pretitulo Se unirán en #[span.mongoDB(title='MongoDB') documentos de la colección] de
		h3.titulo Perfiles de usuario
		.tablas
			.tabla(
				v-for='nombre in "users box_usuario role_user mensualidad pago_mensualidad reservas".split(" ")'
			)
				.nombreTabla {{ nombre }}
				.placeholderFilas ...

	.bloque
		.pretitulo Se unirán en #[span.mongoDB(title='MongoDB') documentos de la colección] de
		h3.titulo Instancias de clase
		.tablas
			.tabla(v-for='nombre in "cupos_reservas reservas".split(" ")')
				.nombreTabla {{ nombre }}
				.placeholderFilas ...

	.bloque
		.pretitulo Se pasará al
		h3.titulo Código del back-end (API X)
		.tablas
			.tabla(v-for='nombre in "roles pais".split(" ")')
				.nombreTabla {{ nombre }}
				.placeholderFilas ...
</template>
<script>
const gimnasio = {
	_id: String,
	bmID: Number,
	bmDB: {
		creacion: Date,
		actualizacion: Date,
		status: String,
		slug: String,
		hashID: String
	},
	caracteristicas: {
		clases: Boolean,
		rutinas: Boolean,
		planes: Boolean,
		tienda: Boolean,
		videos: Boolean,
		personalRecords: Boolean,
		benchmarks: Boolean,
		eNutricional: Boolean,
		mostrarParticipantes: Boolean,
		verificarAsistencia: Boolean,
		mostrarEnBuscador: Boolean
	},
	clases: { // Colección de horarios. Cada claseID es key de la clase.
		z7fVV4vjyg: { // claseID
			bmID: Number,
			activa: Boolean,
			nombre: String,
			valor: Number,
			creacion: Date,
			actualizacion: Date,
			programasIDs: [ String ], // Array de Strings: programaID
			horarios: { // Colección de horarios. Cada horarioID es key del horario.
				l7WWxFGN7O: { // horarioID
					bmID: Number,
					activo: Boolean,
					cupos: Number,
					horaInicio: "18:00", // Hora (hh:mm)
					horaFin: "19:00", // Hora (hh:mm)
					diaSemana: Number, // Numero de día de la semana en formato ISO
					aceptaPrueba: Boolean
				}
			}
		}
	},
	codigo: String, // Código del gimnasio
	contacto: {
		email: String,
		telefono: String,
		sitioWeb: URL
	},
	descripcion: String,
	empresa: {
		rut: String,
		razonSocial: String,
		giro: String,
		ubicacion: {
			direccion: String,
			ciudadBMID: Number,
			comunaBMID: Number
		},
		cuentaBancaria: {
			tipo: String,
			numero: String,
			banco: String,
			email: String
		}
	},
	eventos: { // Colección de eventos. Cada eventoID es key del evento.
		hjk8bas31: { // eventoID
			bmID: Number,
			nombre: String,
			fecha: Date,
			horaInicio: String,
			horaFin: String,
			cupos: Number
		}
	},
	feriados: [Date], // Array de Dates 
	idioma: String,
	logo: URL, // URL del logo
	mensajes: {
		bienvenida: String, // Mensaje de bienvenida, soporta HTML
		clase: {
			antes: String,
			despues: String
		}
	},
	nombre: String,
	perfilesSociales: {
		facebook: URL,
		instagram: URL,
		spotify: URL,
		tiktok: URL
	},
	planes: {
		bQk4oN8oyj: {
			bmID: Number,
			activo: Boolean,
			mostrarEnTienda: Boolean,
			creacion: Date,
			actualizacion: Date,
			nombre: String,
			descripcion: String,
			vigencia: String,
			valor: Number,
			maximoReservasDiarias: Number,
			cupos: Number,
			cuposIlimitados: Boolean,
			cuposPlazo: String,
			sabadoLibre: Boolean,
			vigenciaDias: Number,
			cuposAdicionales: Number,
			multiplesPagos: Number,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [
				855,
				856
			],
			programasIDs: [
				"sgTvJrwtNE",
				"kuK22axkKE"
			]
		},
		"7nYnGKFsWJ": {
			bmID: 103,
			activo: true,
			mostrarEnTienda: false,
			creacion: {
				$date: "2017-02-02T02:03:02.000Z"
			},
			actualizacion: {
				$date: "2017-02-02T02:03:02.000Z"
			},
			nombre: "complementario ",
			descripcion: "test",
			vigencia: "Complementario",
			valor: 0,
			maximoReservasDiarias: 1,
			cupos: 7,
			cuposIlimitados: false,
			cuposPlazo: "mensual",
			sabadoLibre: true,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [],
			invalido: true,
			programasIDs: []
		},
		YTgFGWoewG: {
			bmID: 198,
			activo: false,
			mostrarEnTienda: true,
			creacion: {
				$date: "2017-03-02T09:06:01.000Z"
			},
			actualizacion: {
				$date: "2020-11-03T23:07:24.000Z"
			},
			nombre: "Full",
			descripcion: "Entrégalo todo en tu plan PRO para un compromiso FULL",
			vigencia: "Mensual",
			valor: 1200,
			maximoReservasDiarias: 10,
			cupos: 50,
			cuposIlimitados: false,
			cuposPlazo: "semanal",
			sabadoLibre: true,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [
				855,
				856,
				858,
				1382,
				1719,
				1726,
				2476,
				2485,
				2504,
				2623,
				4264,
				4798
			],
			programasIDs: [
				"sgTvJrwtNE",
				"kuK22axkKE",
				"rxTw7qu0YH",
				"rpwq9vGHSK",
				"QxShdUbNFF",
				"uVWnp4WqFI",
				"BKfK56vXJM",
				"nzTHr46jfz",
				"qSffco4JwL",
				"XJ0Y2D2k1d",
				"ryuKDdDssn",
				"8SGHQ6vg45"
			]
		},
		ieesDdU97D: {
			bmID: 199,
			activo: true,
			mostrarEnTienda: false,
			creacion: {
				$date: "2017-03-02T09:08:04.000Z"
			},
			actualizacion: {
				$date: "2017-08-16T04:20:35.000Z"
			},
			nombre: "2 veces por semana",
			descripcion: "2x semana Crossfit, Yoga, Fundamentos",
			vigencia: "Mensual",
			valor: 20000,
			maximoReservasDiarias: 1,
			cupos: 2,
			cuposIlimitados: false,
			cuposPlazo: "semanal",
			sabadoLibre: true,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [],
			programasIDs: []
		},
		TlpCiEhbYg: {
			bmID: 200,
			activo: true,
			mostrarEnTienda: true,
			creacion: {
				$date: "2017-03-02T09:13:22.000Z"
			},
			actualizacion: {
				$date: "2021-10-29T05:25:23.000Z"
			},
			nombre: "Plan Básico",
			descripcion: "Plan Básico 10 veces por mes (Crossfit y Open Box)",
			vigencia: "Mensual",
			valor: 35000,
			maximoReservasDiarias: 1,
			cupos: 10,
			cuposIlimitados: false,
			cuposPlazo: "mensual",
			sabadoLibre: false,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [
				855,
				856,
				858,
				1382,
				1719,
				1726,
				2476,
				2485,
				2504,
				2623,
				4264,
				4798,
				5205,
				5206,
				5207,
				5234,
				5235,
				5236,
				5290,
				5683
			],
			programasIDs: [
				"sgTvJrwtNE",
				"kuK22axkKE",
				"rxTw7qu0YH",
				"rpwq9vGHSK",
				"QxShdUbNFF",
				"uVWnp4WqFI",
				"BKfK56vXJM",
				"nzTHr46jfz",
				"qSffco4JwL",
				"XJ0Y2D2k1d",
				"ryuKDdDssn",
				"8SGHQ6vg45",
				"IAZD1xM8K4",
				"AuevvDn6F9",
				"Ll4Pkl7k6F",
				"NVra1v6VYC",
				"rH1pXNfjH6",
				"wnN0pRK3N9",
				"qRa4v5kdUd",
				"RqBqcmiF6y"
			]
		},
		jbp9w74naE: {
			bmID: 1786,
			activo: true,
			mostrarEnTienda: false,
			creacion: {
				$date: "2018-01-09T07:06:28.000Z"
			},
			actualizacion: {
				$date: "2018-01-09T07:06:28.000Z"
			},
			nombre: "Prueba por clase",
			descripcion: "123",
			vigencia: "Por Clase",
			valor: 5000,
			maximoReservasDiarias: 1,
			cupos: 1,
			cuposIlimitados: false,
			cuposPlazo: "por clase",
			sabadoLibre: false,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [],
			programasIDs: []
		},
		bLJANm2Zky: {
			bmID: 3151,
			activo: true,
			mostrarEnTienda: true,
			creacion: {
				$date: "2018-09-13T23:34:07.000Z"
			},
			actualizacion: {
				$date: "2021-04-17T00:57:55.000Z"
			},
			nombre: "Plan Anual",
			descripcion: "Anual",
			vigencia: "Anual",
			valor: 100000,
			maximoReservasDiarias: 3,
			cupos: 0,
			cuposIlimitados: true,
			cuposPlazo: "mensual",
			sabadoLibre: true,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [
				855,
				856,
				858,
				1382,
				1719,
				1726,
				2476,
				2485,
				2504,
				2623,
				4264,
				4798,
				5205,
				5206,
				5207,
				5234,
				5235,
				5236,
				5290,
				5683
			],
			programasIDs: [
				"sgTvJrwtNE",
				"kuK22axkKE",
				"rxTw7qu0YH",
				"rpwq9vGHSK",
				"QxShdUbNFF",
				"uVWnp4WqFI",
				"BKfK56vXJM",
				"nzTHr46jfz",
				"qSffco4JwL",
				"XJ0Y2D2k1d",
				"ryuKDdDssn",
				"8SGHQ6vg45",
				"IAZD1xM8K4",
				"AuevvDn6F9",
				"Ll4Pkl7k6F",
				"NVra1v6VYC",
				"rH1pXNfjH6",
				"wnN0pRK3N9",
				"qRa4v5kdUd",
				"RqBqcmiF6y"
			]
		},
		"4dZxpVlebd": {
			bmID: 3810,
			activo: true,
			mostrarEnTienda: true,
			creacion: {
				$date: "2018-12-20T01:30:42.000Z"
			},
			actualizacion: {
				$date: "2019-03-03T06:35:59.000Z"
			},
			nombre: "Plan Atleta",
			descripcion: "plan especial fin de año",
			vigencia: "Anual",
			valor: 350000,
			maximoReservasDiarias: 2,
			cupos: 1,
			cuposIlimitados: false,
			cuposPlazo: "semanal",
			sabadoLibre: false,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [],
			programasIDs: []
		},
		tWHS8E6LBJ: {
			bmID: 11089,
			activo: true,
			mostrarEnTienda: false,
			creacion: {
				$date: "2019-09-29T21:20:09.000Z"
			},
			actualizacion: {
				$date: "2019-09-29T21:20:09.000Z"
			},
			nombre: "Plan Gympass",
			descripcion: "Plan por clase Gympass",
			vigencia: "Por Clase",
			valor: 0,
			maximoReservasDiarias: 1,
			cupos: 1,
			cuposIlimitados: false,
			cuposPlazo: "por clase",
			sabadoLibre: false,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [
				855,
				856,
				858,
				1382,
				1719,
				1726
			],
			programasIDs: [
				"sgTvJrwtNE",
				"kuK22axkKE",
				"rxTw7qu0YH",
				"rpwq9vGHSK",
				"QxShdUbNFF",
				"uVWnp4WqFI"
			]
		},
		xg09WEv9rq: {
			bmID: 12065,
			activo: true,
			mostrarEnTienda: true,
			creacion: {
				$date: "2019-12-09T19:58:36.000Z"
			},
			actualizacion: {
				$date: "2019-12-09T19:58:36.000Z"
			},
			nombre: "Plan Calistenia",
			descripcion: "Calistenia 8 clases al mes",
			vigencia: "Mensual",
			valor: 15000,
			maximoReservasDiarias: 1,
			cupos: 8,
			cuposIlimitados: false,
			cuposPlazo: "mensual",
			sabadoLibre: false,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [
				2476
			],
			programasIDs: [
				"BKfK56vXJM"
			]
		},
		zfFP5c6UYY: {
			bmID: 12142,
			activo: true,
			mostrarEnTienda: false,
			creacion: {
				$date: "2019-12-11T23:54:17.000Z"
			},
			actualizacion: {
				$date: "2021-04-03T17:24:05.000Z"
			},
			nombre: "Plan Brasil",
			descripcion: "Test",
			vigencia: "Mensual",
			valor: 6,
			maximoReservasDiarias: 1,
			cupos: 6,
			cuposIlimitados: false,
			cuposPlazo: "mensual",
			sabadoLibre: false,
			vigenciaDias: 0,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [
				855,
				856
			],
			programasIDs: [
				"sgTvJrwtNE",
				"kuK22axkKE"
			]
		},
		bVsDGQGspc: {
			bmID: 12147,
			activo: true,
			mostrarEnTienda: true,
			creacion: {
				$date: "2019-12-12T12:35:45.000Z"
			},
			actualizacion: {
				$date: "2021-08-20T03:28:31.000Z"
			},
			nombre: "Plan Gustavo Espíndola",
			descripcion: "Es un tipo de entrenamiento que busca conseguir el mayor rendimiento posible del cuerpo, siempre orientado a un objetivo concreto. Sus ejercicios imitan o se inspiran en el movimiento humano.\r\n",
			vigencia: "Personalizado",
			valor: 10000,
			maximoReservasDiarias: 1,
			cupos: 3,
			cuposIlimitados: false,
			cuposPlazo: "personalizado",
			sabadoLibre: true,
			vigenciaDias: 12,
			cuposAdicionales: 0,
			multiplesPagos: 0,
			multiplesPagosID: null,
			multiplesPagosCantidad: 0,
			programasBmIDs: [
				855,
				856,
				858,
				1382,
				1719,
				1726,
				2476,
				2485,
				2504,
				2623,
				4264,
				4798,
				5205,
				5206,
				5207,
				5234,
				5235,
				5236,
				5290,
				5683
			],
			programasIDs: [
				"sgTvJrwtNE",
				"kuK22axkKE",
				"rxTw7qu0YH",
				"rpwq9vGHSK",
				"QxShdUbNFF",
				"uVWnp4WqFI",
				"BKfK56vXJM",
				"nzTHr46jfz",
				"qSffco4JwL",
				"XJ0Y2D2k1d",
				"ryuKDdDssn",
				"8SGHQ6vg45",
				"IAZD1xM8K4",
				"AuevvDn6F9",
				"Ll4Pkl7k6F",
				"NVra1v6VYC",
				"rH1pXNfjH6",
				"wnN0pRK3N9",
				"qRa4v5kdUd",
				"RqBqcmiF6y"
			]
		},
		shEo4QfeEb: {
			bmID: 12190,
			activo: true,
			mostrarEnTienda: false,
			creacion: {
				$date: "2019-12-13T21:14:19.000Z"
			},
			actualizacion: {
				$date: "2021-04-03T17:26:22.000Z"
			},
			nombre: "Prueba VP Prod Subscription",
			descripcion: "Prueba VP",
			vigencia: "Mensual",
			valor: Number,
			maximoReservasDiarias: Number,
			cupos: Number,
			cuposIlimitados: false,
			cuposPlazo: "mensual",
			sabadoLibre: false,
			vigenciaDias: Number,
			cuposAdicionales: Number,
			multiplesPagos: Number,
			multiplesPagosID: String,
			multiplesPagosCantidad: Number,
			programasBmIDs: [ Number ],
			programasIDs: [ "sgTvJrwtNE", "kuK22axkKE" ]
		}
	},
	restricciones: {
		reservaAperturaMins: Number,
		reservaAntelacionMins: Number,
		limiteDiasFuturosReserva: Number,
		cancelacionTiempoMinimoMins: Number,
		aceptaPostpago: Boolean,
		limitarReservasDiarias: Boolean
	},
	serviciosComplementarios: {
		analitica: {
			googleAnalytics: String
		}
	},
	slogan: String,
	ubicacion: {
		direccion: String,
		lat: String,
		lon: String
	},
	ultimaImportacion: Date,
	galeriasVideo: {
		Ee6GiwHzHI: {
			bmID: 37,
			publico: true,
			nombre: "Primer semestre",
			creacion: Date,
			actualizacion: Date,
		}
	},
	videos: {
		ZjvaP9zpeP: {
			bmID: 263,
			publico: true,
			galeriaBmID: 143,
			nombre: "Noah Ohlsen on FRAN",
			descripcion: "Video1",
			url: "https://player.vimeo.com/video/485644476",
			creacion: {
				$date: "2020-11-30T19:50:39.000Z"
			},
			actualizacion: {
				$date: "2021-08-20T01:21:13.000Z"
			},
			vimeoID: "485644476",
			imagen: null,
			visualizaciones: 14,
			descuentaCupo: 1,
			asociarProgramas: 1,
			programasBmIDs: [
				855
			],
			programasIDs: [
				"sgTvJrwtNE"
			],
			galeriaIDs: [
				"mMtgmIhR78"
			]
		}
	},
	timezone: String,

	tiposActividades: {
		"1": "Crossfit",
		"2": "Spartan Race Santiago",
		"3": "Baile",
		"4": "Entrenamiento Funcional",
		"5": "Levantamiento Olímpico"
	}
}
console.log('gimnasio', gimnasio)
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
			+bold
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
