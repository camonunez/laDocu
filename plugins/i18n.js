import Vue from 'vue'
import {_} from './lodash'

import extend from './utilidades/extendAppMixin'
import { consolo } from './consolo'
import en from './i18n/en-us'
import es from './i18n/es-cl'
import pt from './i18n/pt-br'

function obtenerTraduccionesLocales (componente) {
	const { $options } = componente
	const { traducciones } = $options
	// console.log('process.client', process.client)
	// console.log('traducciones', traducciones)
	const retorno = typeof traducciones === 'function' ? traducciones() : traducciones
	// console.log('retorno', retorno)
	return retorno
}

function obtenerTraduccionesGlobales () {
	const traduccionesPorIdioma = {
		es,
		en,
		pt
	}

	const traduccionesGlobales = {}

	_.forEach(traduccionesPorIdioma, (traducciones, idioma) => {
		const rutaValores = _.pathValues(traducciones)
		_.forEach(rutaValores, (valor, ruta) => {
			_.set(traduccionesGlobales, `${ruta}.${idioma}`, valor)
		})
	})

	return traduccionesGlobales
}

function traducir (key) {
	// console.log('traducir', key)
	const componenteActual = this
	const traduccionesLocales = obtenerTraduccionesLocales(componenteActual)
	const traduccionesItem = _.get(traduccionesLocales, key)
	if (traduccionesItem && _.isObject(traduccionesItem) && !_.isArray(traduccionesItem) && !_.isFunction(traduccionesItem)) {
		return _.get(traduccionesItem, Idiomas.activo, key)
	} else {
		const traduccionesGlobales = obtenerTraduccionesGlobales(componenteActual)
		const traduccionDesdeGlobales = _.get(traduccionesGlobales, key)
		return _.get(traduccionDesdeGlobales, Idiomas.activo, key)
	}
}

const inicial = 'es'
const Idiomas = {
	disponibles: ['es', 'en', 'pt'],
	// disponibles: ['es', 'en'],
	activo: 'es',
	porDefecto: true,
	init () {
		this.setDefault()
		const esto = this
		if (typeof window === 'undefined') return
		window.addEventListener('languagechange', function () {
			if (esto.porDefecto) esto.setDefault()
		})
	},
	setDefault () {
		this.porDefecto = true
	},
	identificarDefault () {
		if (typeof navigator === 'undefined') return
		const navLangs = navigator.languages

		let encontrado
		navLangs.forEach(lang => {
			if (!encontrado) {
				if (lang.startsWith('en')) encontrado = 'en'
				else if (lang.startsWith('es')) encontrado = 'es'
				else if (lang.startsWith('pt')) encontrado = 'pt'
			}
		})

		return encontrado || inicial
	},
	set (locale) {
		if (typeof locale === 'undefined' || !locale) return this.setDefault()
		locale = locale.toLowerCase()

		if (locale.startsWith('en')) locale = 'en'
		else if (locale.startsWith('es')) locale = 'es'
		else if (locale.startsWith('pt')) locale = 'pt'

		if (!Idiomas.disponibles.includes(locale)) {
			console.error('Imposible cambiar idioma a ', locale)
			return
		}

		this.porDefecto = false
		this.activo = locale
	}
}


const Plugin = {
	install (Vue) {
		Vue.util.defineReactive(Idiomas, 'activo', Idiomas.activo)
		Vue.prototype.$idioma = Idiomas

		Vue.prototype.$t = function (key) {
			// const componente = this
			// console.log('$t componente', componente)
			return traducir.call(this, key)
		}
	}
}

Vue.use(Plugin)

export default function ({ app }) {
	extend(app, {
		mounted () {
			consolo.log('Traductor MOUNTED')
			const plugin = this.$idioma
			plugin.init(this)
		}
	})
}
