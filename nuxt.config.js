
const dev = (process.env.MODO === 'dev')

const nuxtConfig = {
	server: {
		port: 3024,
		host: '0.0.0.0',
		timing: false
	},
	env: {
		DEV: dev,
		VERSION: process.env.npm_package_version
	},
	devtools: dev,
	target: 'static',
	head: {
		title: 'laDocu',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	css: [
		'ant-design-vue/dist/antd.css',
		'~/style/base',
		'~/style/iconos',
		'~/style/logos'
	],
	plugins: [
		'~/plugins/antd-ui',
		'~/plugins/consolo',
		'~/plugins/i18n',
		'~/plugins/i18n',
		'~/plugins/lodash',
		'~/plugins/prism',
		'~/plugins/utilidades'
	],
	components: true,
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/google-fonts'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/pwa
		// '@nuxtjs/pwa'
		['@nuxtjs/firebase',
			{
				config: {
					apiKey: "AIzaSyALYPyvwgqUYPdKvEcMNz2Z7vFkB5C2MB8",
					authDomain: "ladocu.firebaseapp.com",
					projectId: "ladocu",
					storageBucket: "ladocu.appspot.com",
					messagingSenderId: "917808601796",
					appId: "1:917808601796:web:f58de5c066b83be2fd4791",
					measurementId: "G-9CTVLFTNHZ"
				},
				services: {
					analytics: true // Just as example. Can be any other service.
				}
			}]
	],

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	// pwa: {
	// 	manifest: {
	// 		lang: 'es'
	// 	}
	// },

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},
	telemetry: false,


	googleFonts: {
		families: {
			'DM+Sans': true
		}
	}
}


export default nuxtConfig
