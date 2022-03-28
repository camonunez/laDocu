<template lang="pug">
Codigo(lang="json").
	{
		"_id": "mFK6-5hua",
		"altura": 1.84,
		"nombre": "Michael",
		"sexo": "hombre",
		"talla": "",
		"ultimaImportacion": { "$date": "2021-10-29T19:59:17.913Z" }
		"apellido": "Fassbender",
		"avatar": "https://cdn.boxmagic.cl/perfiles/118432/avatar.jpg?1633907957",
		"bmID": 118432,
		"boxActivo": 2,
		"email": "fassbender@obiqu.com",
		"estado": "activo",
		"fechaNacimiento": "1990-10-10",
		"gimnasioActivo": "1mX2PZldAS",
		"gimnasios": {
			"1mX2PZldAS": {
				"nombre": "BoxMagic Gym",
				"codigo": "boxmagic1782",
				"logo": "https://cdn.boxmagic.cl/uploads/boxes_images/isotipo_color1.png",
				"roles": [ "alumno" ],
				"membresias": {
					"U67ibw6Z5u": {
						"activa": true,
						"bmID": 190114,
						"planBmID": 12142,
						"diaDePago": 1,
						"subcuenta": false,
						"pagos": {
							"Ev3b6NXRzu": {
								"bmID": 434125,
								"creacion": { "$date": "2021-08-31T17:50:16.000Z" },
								"actualizacion": { "$date": "2021-08-31T17:50:16.000Z" },
								"observacion": null,
								"transaccion": {
									"fechaPago": { "$date": "2021-08-31T00:00:00.000Z" },
									"boletear": false,
									"monto": 60000,
									"medioPago": "efectivo",
									"documentoTipo": "factura exenta",
									"documentoID": null
								},
								"vigenciaInicio": { "$date": "2021-08-30T00:00:00.000Z" },
								"vigenciaFin": { "$date": "2021-09-30T00:00:00.000Z" },
								"cuposYaUtilizados": 0,
								"cuposAdicionales": 0,
								"congeladoFecha": null,
								"congelado": false,
								"vigenciaInicioAlCongelar": null
							},
							"ZAEycr2T7X": {
								"bmID": 434437,
								"creacion": { "$date": "2021-08-31T21:49:16.000Z" },
								"actualizacion": { "$date": "2021-08-31T21:49:16.000Z" },
								"observacion": null,
								"transaccion": {
									"fechaPago": { "$date": "2021-08-10T00:00:00.000Z" },
									"boletear": false,
									"monto": 6,
									"medioPago": "efectivo",
									"documentoTipo": "factura exenta",
									"documentoID": null
								},
								"vigenciaInicio": { "$date": "2021-08-10T00:00:00.000Z" },
								"vigenciaFin": { "$date": "2021-09-10T00:00:00.000Z" },
								"cuposYaUtilizados": 0,
								"cuposAdicionales": 0,
								"congeladoFecha": null,
								"congelado": false,
								"vigenciaInicioAlCongelar": null
							}
						},
						"reservas": {
							"W9oz25JC33": {
								"bmID": 4015126,
								"creacion": { "$date": "2021-08-31T18:37:59.000Z" },
								"actualizacion": { "$date": "2021-08-31T18:37:59.000Z" },
								"importacion": { "$date": "2021-10-29T19:59:16.923Z" },
								"fecha": "2021-09-02",
								"hora": "18:00",
								"descuentaCupo": true,
								"claseBmID": 4984,
								"horarioBmID": 17735,
								"pagoBmID": 434125,
								"canal": "",
								"retroalimentacionUsuario": {
									"estrellas": null,
									"comentario": null
								},
								"pagoID": "Ev3b6NXRzu",
								"claseID": "ZOS6aoxESp",
								"horarioID": "6A6ooasQQX",
								"instanciaID": "pXq92V6cTF",
								"fechaInicio": "2021-09-02T21:00:00.000Z"
							},
							"nQw5ZacFG9": {
								"bmID": 4015335,
								"creacion": { "$date": "2021-08-31T18:56:46.000Z" },
								"actualizacion": { "$date": "2021-08-31T18:56:46.000Z" },
								"importacion": { "$date": "2021-10-29T19:59:16.923Z" },
								"fecha": "2021-09-02",
								"hora": "09:00",
								"descuentaCupo": true,
								"claseBmID": 9308,
								"horarioBmID": 30779,
								"pagoBmID": 434125,
								"canal": "",
								"retroalimentacionUsuario": {
									"estrellas": null,
									"comentario": null
								},
								"pagoID": "Ev3b6NXRzu",
								"claseID": "9b3Ryphxhr",
								"horarioID": "TKtYR79IhL",
								"instanciaID": "60jsM0SXu3",
								"fechaInicio": "2021-09-02T12:00:00.000Z"
							}
						},
						"planID": "zfFP5c6UYY"
					}
				},
				"reservasInvalidas": {
					"JNoldngzGj": {
						"bmID": 3031487,
						"creacion": { "$date": "2020-10-30T20:42:53.000Z" },
						"actualizacion": { "$date": "2020-10-30T20:42:53.000Z" },
						"importacion": { "$date": "2021-10-29T19:59:16.923Z" },
						"fecha": "2020-10-30",
						"hora": "20:30",
						"descuentaCupo": true,
						"claseBmID": 14445,
						"horarioBmID": 44868,
						"pagoBmID": null,
						"canal": "",
						"retroalimentacionUsuario": {
							"estrellas": null,
							"comentario": null
						},
						"fechaInicio": "2020-10-30T23:30:00.000Z",
						"claseID": "Hk2xLwqN0n",
						"horarioID": "EVSgcwHUcl"
					}
				}
			}
		}
	}

</template>
<script>
const perfil = {
	_id: 'mFK6-5hua',
	altura: 1.84,
	nombre: 'Michael',
	sexo: 'hombre',
	talla: '',
	ultimaImportacion: Date,
	apellido: 'Fassbender',
	avatar: 'https://cdn.boxmagic.cl/perfiles/118432/avatar.jpg?1633907957',
	bmID: 118432,
	boxActivo: 2,
	email: 'fassbender@obiqu.com',
	estado: 'activo',
	fechaNacimiento: '1990-10-10',
	gimnasioActivo: '1mX2PZldAS',
	gimnasios: {
		'1mX2PZldAS': {
			nombre: 'BoxMagic Gym',
			codigo: 'boxmagic1782',
			logo: 'https://cdn.boxmagic.cl/uploads/boxes_images/isotipo_color1.png',
			roles: ['alumno'],
			membresias: {
				U67ibw6Z5u: {
					activa: true,
					bmID: 190114,
					planBmID: 12142,
					diaDePago: 1,
					subcuenta: false,
					pagos: {
						Ev3b6NXRzu: {
							bmID: 434125,
							creacion: {
								$date: '2021-08-31T17:50:16.000Z'
							},
							actualizacion: {
								$date: '2021-08-31T17:50:16.000Z'
							},
							observacion: null,
							transaccion: {
								fechaPago: {
									$date: '2021-08-31T00:00:00.000Z'
								},
								boletear: false,
								monto: 60000,
								medioPago: 'efectivo',
								documentoTipo: 'factura exenta',
								documentoID: null
							},
							vigenciaInicio: {
								$date: '2021-08-30T00:00:00.000Z'
							},
							vigenciaFin: {
								$date: '2021-09-30T00:00:00.000Z'
							},
							cuposYaUtilizados: 0,
							cuposAdicionales: 0,
							congeladoFecha: null,
							congelado: false,
							vigenciaInicioAlCongelar: null
						},
						ZAEycr2T7X: {
							bmID: 434437,
							creacion: {
								$date: '2021-08-31T21:49:16.000Z'
							},
							actualizacion: {
								$date: '2021-08-31T21:49:16.000Z'
							},
							observacion: null,
							transaccion: {
								fechaPago: {
									$date: '2021-08-10T00:00:00.000Z'
								},
								boletear: false,
								monto: 6,
								medioPago: 'efectivo',
								documentoTipo: 'factura exenta',
								documentoID: null
							},
							vigenciaInicio: {
								$date: '2021-08-10T00:00:00.000Z'
							},
							vigenciaFin: {
								$date: '2021-09-10T00:00:00.000Z'
							},
							cuposYaUtilizados: 0,
							cuposAdicionales: 0,
							congeladoFecha: null,
							congelado: false,
							vigenciaInicioAlCongelar: null
						}
					},
					reservas: {
						W9oz25JC33: {
							bmID: 4015126,
							creacion: {
								$date: '2021-08-31T18:37:59.000Z'
							},
							actualizacion: {
								$date: '2021-08-31T18:37:59.000Z'
							},
							importacion: {
								$date: '2021-10-29T19:59:16.923Z'
							},
							fecha: '2021-09-02',
							hora: '18:00',
							descuentaCupo: true,
							claseBmID: 4984,
							horarioBmID: 17735,
							pagoBmID: 434125,
							canal: '',
							retroalimentacionUsuario: {
								estrellas: null,
								comentario: null
							},
							pagoID: 'Ev3b6NXRzu',
							claseID: 'ZOS6aoxESp',
							horarioID: '6A6ooasQQX',
							instanciaID: 'pXq92V6cTF',
							fechaInicio: '2021-09-02T21:00:00.000Z'
						},
						nQw5ZacFG9: {
							bmID: 4015335,
							creacion: {
								$date: '2021-08-31T18:56:46.000Z'
							},
							actualizacion: {
								$date: '2021-08-31T18:56:46.000Z'
							},
							importacion: {
								$date: '2021-10-29T19:59:16.923Z'
							},
							fecha: '2021-09-02',
							hora: '09:00',
							descuentaCupo: true,
							claseBmID: 9308,
							horarioBmID: 30779,
							pagoBmID: 434125,
							canal: '',
							retroalimentacionUsuario: {
								estrellas: null,
								comentario: null
							},
							pagoID: 'Ev3b6NXRzu',
							claseID: '9b3Ryphxhr',
							horarioID: 'TKtYR79IhL',
							instanciaID: '60jsM0SXu3',
							fechaInicio: '2021-09-02T12:00:00.000Z'
						}
					},
					planID: 'zfFP5c6UYY'
				}
			},
			reservasInvalidas: {
				JNoldngzGj: {
					bmID: 3031487,
					creacion: {
						$date: '2020-10-30T20:42:53.000Z'
					},
					actualizacion: {
						$date: '2020-10-30T20:42:53.000Z'
					},
					importacion: {
						$date: '2021-10-29T19:59:16.923Z'
					},
					fecha: '2020-10-30',
					hora: '20:30',
					descuentaCupo: true,
					claseBmID: 14445,
					horarioBmID: 44868,
					pagoBmID: null,
					canal: '',
					retroalimentacionUsuario: {
						estrellas: null,
						comentario: null
					},
					fechaInicio: '2020-10-30T23:30:00.000Z',
					claseID: 'Hk2xLwqN0n',
					horarioID: 'EVSgcwHUcl'
				}
			}
		}
	}
}
console.log('perfil', perfil)
export default {}
</script>
