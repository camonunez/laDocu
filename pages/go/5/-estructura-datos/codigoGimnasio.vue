<template lang="pug">
Codigo(lang="json").
	{
		"_id": String,
		"bmID": Number,
		"bmDB": {
			"creacion": Date,
			"actualizacion": Date,
			"status": String,
			"slug": String,
			"hashID": String
		},
		"caracteristicas": {
			"clases": Boolean,
			"rutinas": Boolean,
			"planes": Boolean,
			"tienda": Boolean,
			"videos": Boolean,
			"personalRecords": Boolean,
			"benchmarks": Boolean,
			"eNutricional": Boolean,
			"mostrarParticipantes": Boolean,
			"verificarAsistencia": Boolean,
			"mostrarEnBuscador": Boolean
		},
		"codigo": String, // Código del gimnasio
		"contacto": {
			"email": String,
			"telefono": String,
			"sitioWeb": URL
		},
		"descripcion": String,
		"empresa": {
			"rut": String,
			"razonSocial": String,
			"giro": String,
			"ubicacion": {
				"direccion": String,
				"ciudadBMID": Number,
				"comunaBMID": Number
			},
			"cuentaBancaria": {
				"tipo": String,
				"numero": String,
				"banco": String,
				"email": String
			}
		},
		"idioma": String,
		"logo": URL, // URL del logo
		"mensajes": {
			"bienvenida": String, // Mensaje de bienvenida, soporta HTML
			"clase": {
				"antes": String,
				"despues": String
			}
		},
		"nombre": String,
		"perfilesSociales": {
			"facebook": URL,
			"instagram": URL,
			"spotify": URL,
			"tiktok": URL
		},
		"restricciones": {
			"reservaAperturaMins": Number,
			"reservaAntelacionMins": Number,
			"limiteDiasFuturosReserva": Number,
			"cancelacionTiempoMinimoMins": Number,
			"aceptaPostpago": Boolean,
			"limitarReservasDiarias": Boolean
		},
		"serviciosComplementarios": {
			"analitica": { "googleAnalytics": String }
		},
		"slogan": String,
		"timezone": String,
		"ubicacion": {
			"direccion": String,
			"lat": String,
			"lon": String
		},

		"clases": { // Colección de horarios. Cada claseID es key de la clase.
			"z7fVV4vjyg": { // claseID
				"bmID": Number,
				"activa": Boolean,
				"nombre": String,
				"valor": Number,
				"creacion": Date,
				"actualizacion": Date,
				"programasIDs": [ String ], // Array de Strings: programaID
				"horarios": { // Colección de horarios. Cada horarioID es key del horario.
					"l7WWxFGN7O": { // horarioID
						"bmID": Number,
						"activo": Boolean,
						"cupos": Number,
						"horaInicio": String, // Hora (hh:mm)
						"horaFin": String, // Hora (hh:mm)
						"diaSemana": Number, // Numero de día de la semana en formato ISO
						"aceptaPrueba": Boolean
					}
				}
			}
		},
		"eventos": { // Colección de eventos. Cada eventoID es key del evento.
			"hjk8bas31": { // eventoID
				"bmID": Number,
				"nombre": String,
				"fecha": Date,
				"horaInicio": String, // Hora (hh:mm)
				"horaFin": String, // Hora (hh:mm)
				"cupos": Number
			}
		},
		"feriados": [Date], // Array de Dates 
		"planes": {
			"bQk4oN8oyj": {
				"bmID": Number,
				"activo": Boolean,
				"mostrarEnTienda": Boolean,
				"creacion": Date,
				"actualizacion": Date,
				"nombre": String,
				"descripcion": String,
				"vigencia": String,
				"valor": Number,
				"maximoReservasDiarias": Number,
				"cupos": Number,
				"cuposIlimitados": Boolean,
				"cuposPlazo": String,
				"sabadoLibre": Boolean,
				"vigenciaDias": Number,
				"cuposAdicionales": Number,
				"multiplesPagos": Number,
				"multiplesPagosID": String, // ID de la suscripcion
				"multiplesPagosCantidad": Number,
				"programasBmIDs": [ Number ],
				"programasIDs": [ String ]
			}
		},
		"galeriasVideo": {
			"Ee6GiwHzHI": {
				"bmID": Number,
				"publico": Boolean,
				"nombre": String,
				"creacion": Date,
				"actualizacion": Date,
			}
		},
		"videos": {
			"ZjvaP9zpeP": {
				"bmID": Number,
				"publico": Boolean,
				"galeriaBmID": Number,
				"nombre": String,
				"descripcion": String,
				"url": URL,
				"creacion": Date,
				"actualizacion": Date,
				"vimeoID": String,
				"imagen": URL,
				"visualizaciones": Number,
				"descuentaCupo": Number,
				"asociarProgramas": Number,
				"programasBmIDs": [ Number ],
				"programasIDs": [ String ],
				"galeriaIDs": [ String ]
			}
		},
		"tiposActividades": {
			// String ActividadID: String Nombre de actividad
			"1": "Crossfit", 
			"2": "Spartan Race Santiago",
			"3": "Baile",
			"4": "Entrenamiento Funcional",
			"5": "Levantamiento Olímpico"
		}
	}
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
	restricciones: {
		reservaAperturaMins: Number,
		reservaAntelacionMins: Number,
		limiteDiasFuturosReserva: Number,
		cancelacionTiempoMinimoMins: Number,
		aceptaPostpago: Boolean,
		limitarReservasDiarias: Boolean
	},
	serviciosComplementarios: {
		analitica: { googleAnalytics: String }
	},
	slogan: String,
	timezone: String,
	ubicacion: {
		direccion: String,
		lat: String,
		lon: String
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
			multiplesPagosID: String, // ID de la suscripcion
			multiplesPagosCantidad: Number,
			programasBmIDs: [ Number ],
			programasIDs: [ String ]
		}
	},
	galeriasVideo: {
		Ee6GiwHzHI: {
			bmID: Number,
			publico: Boolean,
			nombre: String,
			creacion: Date,
			actualizacion: Date,
		}
	},
	videos: {
		ZjvaP9zpeP: {
			bmID: Number,
			publico: Boolean,
			galeriaBmID: Number,
			nombre: String,
			descripcion: String,
			url: URL,
			creacion: Date,
			actualizacion: Date,
			vimeoID: String,
			imagen: URL,
			visualizaciones: Number,
			descuentaCupo: Number,
			asociarProgramas: Number,
			programasBmIDs: [ Number ],
			programasIDs: [ String ],
			galeriaIDs: [ String ]
		}
	},
	tiposActividades: {
		"1": "Crossfit", // String ActividadID: String Nombre de actividad
		"2": "Spartan Race Santiago",
		"3": "Baile",
		"4": "Entrenamiento Funcional",
		"5": "Levantamiento Olímpico"
	}
}
console.log('gimnasio', gimnasio)
export default {
	
}
</script>