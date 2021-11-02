import util from 'util'
import Vue from 'vue'
import isEmail from 'validator/lib/isEmail'
import phoneValidator from 'phone'
import { customAlphabet } from 'nanoid'
import parameterize from './utilidades/parameterize'



function inspect (objeto) {
	return util.inspect(objeto, { colors: true, depth: null })
}

let logear = {
	log: console.log,
	info: console.info,
	warn: console.warn,
	error: console.error
}
// eslint-disable-next-line no-console
if (!process.dev) {
	logear = {
		log: () => {},
		info: () => {},
		warn: () => {},
		error: () => {}
	}
}

const computed = {}

const methods = {
	$id () { 
		const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		const MiniID = customAlphabet(alphabet, 10)
		return MiniID()
	 },
	async $olicitar (operacion, ruta = '/api/data.json') {
		// this.$root.$emit('alerta', { texto: 'Solicitando info al servidor', titulo: 'Cargando...' })
		const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
		if (sessionStorage.token) headers.Authorization = `Bearer ${sessionStorage.token}`
		let data
		try {
			data = await fetch(`${process.env.apiUrl}${ruta}`, {
				method: 'post',
				headers,
				credentials: 'include',
				body: JSON.stringify(Object.assign(operacion))
			}).then(r => r.json())
				.catch(e => {
					logear.error('Solicitud no resuelta', e)
					return { ok: 0, error: e }
				})
		} catch (e) {
			logear.error('try > catch: Solicitud no resuelta', e)
		}
		if (!data.ok) {
			const error = data.error || data
			logear.info('Procesado error ', error)
			if (data.error) {
				this.$root.$emit('alerta', { texto: data.error, titulo: 'Error al solicitar información al servidor' })
			} else {
				this.$root.$emit('alerta', { titulo: 'ERROR', texto: 'Error al solicitar información al servidor' })
			}
		}
		return data
	},
	async $modificar (pathSets) {
		console.log('modificar', pathSets)
		let errs = 0
		this._.forEach(pathSets, ps => {
			if (Object.keys(ps).length !== 2) {
				console.log('Pathset inválido', ps)
				errs = errs + 1
			} else if (!ps.path) {
				console.log('Pathset sin path', ps)
				errs = errs + 1
			} else if (typeof ps.set === 'undefined') {
				console.log('Pathset sin set', ps)
				errs = errs + 1
			}
		})
		if (errs > 0) return
		const solicitud = await this.$olicitar({ method: 'modificar', pathSets })
		console.log('modificacion', JSON.parse(JSON.stringify(solicitud)))
		if (!solicitud.ok) {
			throw solicitud
		}
		return solicitud
	},
	async $autorizarCarga (ruta) {
		if (!ruta) throw 'Falta la ruta del archivo a autorizar'
		const solicitud = await this.$olicitar({ method: 'S3', ruta })
		if (!solicitud.ok) {
			console.log('solicitud', JSON.parse(JSON.stringify(solicitud)))
			if (solicitud.error) throw solicitud.error
			else throw solicitud
		}
		return solicitud.url
	},
	$isEmail (email) {
		try {
			return isEmail(email)
		} catch (e) {
			console.warn(e)
			return false
		}
	},
	$validarTelefono (codigoPais, telefono) {
		const resultado = phoneValidator(telefono, codigoPais)
		if (this._.isEmpty(resultado)) return false
		else return resultado[0]
	},
	$nArray (final, inicial = 1) {
		const array = []
		for (inicial; inicial <= final; inicial++) array.push(inicial)
		return array
	},

	$monetizado (monto, moneda = 'CLP') {
		monto = Number(monto)
		if (isNaN(monto)) { return 'NaN' }
		if (monto === 0) { return 'Gratis!' }
		if (!monto) { return null }
		if (monto <= 0) { return 'ERRNEG' }
		if (moneda === 'USD') monto = monto.toFixed(2)
		return monto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	},

	$enviarForm (url, datos, method = 'post') {
		const _ = this._
		const form = document.createElement('form')
		form.setAttribute('method', method)
		form.setAttribute('action', url)
		_.forEach(datos, (valor, campo) => {
			if (_.isArray(valor)) {
				_.forEach(valor, (value2, subcampo) => {
					const hiddenField = document.createElement('input')
					hiddenField.setAttribute('type', 'hidden')
					hiddenField.setAttribute('name', campo + '[' + subcampo + ']')
					hiddenField.setAttribute('value', value2)
					form.appendChild(hiddenField)
				})
			} else if (_.isObject(valor)) {
				_.forEach(valor, (value2, subcampo) => {
					const hiddenField = document.createElement('input')
					hiddenField.setAttribute('type', 'hidden')
					hiddenField.setAttribute('name', campo + '.' + subcampo)
					hiddenField.setAttribute('value', value2)
					form.appendChild(hiddenField)
				})
			} else {
				const hiddenField = document.createElement('input')
				hiddenField.setAttribute('type', 'hidden')
				hiddenField.setAttribute('name', campo)
				hiddenField.setAttribute('value', valor)
				form.appendChild(hiddenField)
			}
		})
		document.body.appendChild(form)
		form.submit()
	}
}

const mixin = {
	methods,
	computed
}

function $irURLExterna (url) {
	window.open(url, '_blank', 'noopener')
}

function capitalizar (string) {
	if (!string) return null
	const str = String(string)
	return str.substring(0, 1).toUpperCase() + str.substring(1)
}

export default () => {
	Vue.prototype.$inspect = inspect
	Vue.prototype.$p = parameterize
	Vue.prototype.$c = capitalizar
	Vue.prototype.$irURLExterna = $irURLExterna

	if (!Vue.__utilidades__) {
		Vue.__utilidades__ = true
		Vue.mixin(mixin)
	}
}

export {
	inspect
}
