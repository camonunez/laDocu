const colorMarca = '#0F6078'
// const colorMarca2 = '#FE805C'

const colorError = '#A8201A'
const colorExito = '#60A561'
const colorAtencion = '#F79D5C'

const fontSize = 14
const textoColor = '#141414'

const linkColor = colorMarca
// const botonPrincipalFondo = `linear-gradient(0% ${colorMarca}, 100% ${colorMarca2})`

const vars = {
	'primary-color': colorMarca, // primary color for all components
	'link-color': linkColor, // link color
	'success-color': colorExito, // success state color
	'warning-color': colorAtencion, // warning state color
	'error-color': colorError, // error state color
	'highlight-color': colorError, // error state color
	'heading-color': '#1E212B', // heading text color

	'text-color': textoColor, // major text color
	'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color

	'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
	'border-color-base': '#d9d9d9', // major border color
	'border-radius-base': '6px', // major border radius
	'border-width-base': '0',
	'box-shadow-base': '0 0 0 rgba(0, 0, 0, 0)', // major shadow for layers
	'font-family': '"Jost", -apple-system, BlinkMacSystemFont, Meiryo, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
	'font-size-base': `${fontSize}px`,
	'font-size-lg': '20px',
	'font-size-sm': '13px',
	'padding-lg': '28px',
	'padding-md': '20px',
	'padding-sm': '10px',
	'padding-xs': '12px',

	'@component-background': '#f5f5f5'
}

const botones = {
	'btn-default-color': textoColor,
	'btn-default-bg': '#f0f0f0',
	// 'btn-default-bg': botonPrincipalFondo,
	'btn-height-base': '40px',
	'btn-height-lg': '48px',
	'btn-height-sm': '32px',

	'btn-border-width': '0',
	'btn-shadow': '0 0 0 rgba(0, 0, 0, 0)',

	'btn-primary-shadow': '0 0 0 rgba(0, 0, 0, 0)',
	'btn-primary-bg': colorMarca,
	'btn-primary-color': '#ffffff'
}

const input = {
	// 'input-bg': `#f00`
	// 'input-height-base': '40px'
}

const checkbox = {
	'checkbox-size': `${fontSize * 1.2}px`,
	'checkbox-border-width': '1px'
}

const todo = Object.assign({}, vars, botones, input, checkbox)

export default todo
