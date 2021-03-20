import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance. for bossa box
const theme = createMuiTheme({
	typography: {
		//body
		fontFamily: ['Source Sans Pro'],
		color: '#170C3A',
		fontSize: 18,
		fontWeight: 400,
		letterSpacing: '0.4px',
		h1: {
			fontFamily: ['Source Sans Pro'],
			fontWeight: 600,
			color: '#170C3A',
			fontSize: '42px',
		},
		body1: {
			//bodySmall
		},
		body2: {
			//bodySmallest
		},
	},
	palette: {
		primary: {
			//blues
			darker: '#244AA8',
			dark: '#2F55CC',
			main: '#365DF0',
			light: '#9AAEF7',
			lighter: '#B9C6FA',
			lightest: '#CAD6FC',
			mostLightest: '#E1E7FD',
		},
		secondary: {
			//reds
			darker: '#A53F3F',
			dark: '#CC4C4C',
			main: '#F95E5A',
			light: '#FCAEAC',
			lighter: '#FCC6C5',
			lightest: '#FCD7D6',
			mostLightest: '#FEEFEE',
		},
		error: {
			//reds
			darker: '#A53F3F',
			dark: '#CC4C4C',
			main: '#F95E5A',
			light: '#FCAEAC',
			lighter: '#FCC6C5',
			lightest: '#FCD7D6',
			mostLightest: '#FEEFEE',
		},
		success: {
			//greens
			main: '#12DB89',
			darker: '#0E995D',
			dark: '#10B26C',
			light: '#88EDC4',
			lighter: '#B7F7D8',
			lightest: '#CFF9E6',
			mostLightest: '#E7FBF3',
		},
		background: {
			//whites
			mostDarkest: '#DEDCE1',
			darkest: '#EBEAED',
			darker: '#F5F4F6',
			default: '#FFFFFF',
			main: '#FCFCFD',
		},
	},
})

export default theme
