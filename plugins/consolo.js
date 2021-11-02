const consol = {
	log: console.log,
	info: console.info,
	warn: console.warn,
	error: console.error
}
const consoloff = {
	log: () => {},
	info: () => {},
	warn: () => {},
	error: () => {}
}

// if (!process.env.DEV) consol = consoloff

const consolo = consol

export default ({ app }, inject) => {
	inject('consolo', consolo)
}

export { consolo, consoloff }
