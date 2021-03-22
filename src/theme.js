import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance. for bossa box
const theme = createMuiTheme({
	typography: {
		//body
		fontFamily: 'Source Sans Pro',
		color: '#170C3A',
		fontSize: 20,
		fontWeight: 'normal',
		h1: {
			//font: 'normal normal 600 42px/50px Source Sans Pro',
			fontFamily: ['Source Sans Pro'],
			fontWeight: 600,
			color: '#170C3A',
			fontSize: '42px',
			lineHeight: '50px',
			letterSpacing: '0.84px',
		},
		h2: {
			fontFamily: ['Source Sans Pro'],
			fontWeight: 600,
			color: '#170C3A',
			fontSize: '36px',
			lineHeight: '40px',
			letterSpacing: '0.72px',
		},
		h3: {
			fontFamily: ['Source Sans Pro'],
			fontWeight: 600,
			color: '#170C3A',
			fontSize: '30px',
			lineHeight: '36px',
			letterSpacing: '0.6px',
		},
		h4: {
			fontFamily: ['Source Sans Pro'],
			fontWeight: 600,
			color: '#170C3A',
			fontSize: '26px',
			lineHeight: '32px',
			letterSpacing: '0.52px',
		},
		h5: {
			fontFamily: ['Source Sans Pro'],
			fontWeight: 600,
			color: '#170C3A',
			fontSize: '24px',
			lineHeight: '30px',
			letterSpacing: '0.48px',
		},
		body1: {
			//body
			fontFamily: ['Source Sans Pro'],
			fontWeight: 'normal',
			color: '#170C3A',
			fontSize: '20px',
			lineHeight: '26px',
			letterSpacing: '0.4px',
		},
		body2: {
			//bodySmall
			fontFamily: ['Source Sans Pro'],
			fontWeight: 'normal',
			color: '#8F8A9B',
			fontSize: '18px',
			lineHeight: '24px',
			letterSpacing: '0.36px',
		},
		overline: {
			//bodySmall
			fontFamily: ['Source Sans Pro'],
			fontWeight: 'normal',
			color: '#170C3A',
			fontSize: '16px',
			lineHeight: '22px',
			letterSpacing: '0.32px',
		},
	},
	palette: {
		neutral: {
			main: '#5c6ac4',
		},
		primary: {
			//blues
			dark: '#2F55CC',
			main: '#365DF0',
			light: '#9AAEF7',
		},
		secondary: {
			//reds
			dark: '#CC4C4C',
			main: '#F95E5A',
			light: '#FCAEAC',
		},
		error: {
			//reds
			dark: '#CC4C4C',
			main: '#F95E5A',
			light: '#FCAEAC',
		},
		success: {
			//greens
			dark: '#10B26C',
			main: '#12DB89',
			light: '#88EDC4',
		},
		background: {
			//whites
			paper: '#FFFFFF', //darkerwhite
			default: '#FFFFFF',
		},
	},
	shape: {
		borderRadius: 5,
	},
	overrides: {
		PrivateSwitchBase: {
			root: {
				padding: '8px',
			},
		},
		MuiOutlinedInput: {
			root: {},
		},
		MuiInputBase: {
			input: {
				height: '0.8em',
			},
		},
		MuiFormControl: {
			root: {
				borderRadius: '5px',
			},
		},
		MuiTextField: {
			root: {},
		},
		MuiFormHelperText: {
			root: {
				color: '#F95E5A',
				margin: 0,
				fontSize: '18px',
				marginTop: '3px',
				textAlign: 'right',
				fontFamily: 'Source Sans Pro',
				fontWeight: 'normal',
				lineHeight: '24px',
			},
		},
		MuiCardHeader: {
			action: {
				flex: '0 0 auto',
				alignSelf: 'flex-start',
				marginTop: '0px',
				marginRight: '0px',
			},
		},
		MuiOutlinedInput: {
			notchedOutline: {
				borderColor: '#DEDCE1',
				'&:focus': {
					outline: 'blue solid 10px',
				},
			},
		},
		PrivateNotchedOutline: {
			root: {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				margin: 0,
				padding: '0 0',
				overflow: 'hidden',
				position: 'absolute',
				borderStyle: 'solid',
				borderWidth: '1px',
				borderRadius: 'inherit',
				pointerEvents: 'none',
			},
		},
		MuiOutlinedInput: {
			root: {},
		},
		WAMuiChipInput: {
			root: {
				'&$focused $outlined': {
					borderColor: '#DEDCE1 !important',
				},
			},
			inputRoot: {
				background: '#f5f4f6 0% 0% no-repeat padding-box',
			},
			input: {
				height: '10px',
				marginTop: '4px',
				paddingTop: '4px',
				marginBottom: '4px',
				paddingBottom: '12px',
			},
			focused: {},
			outlined: {
				borderColor: '#DEDCE1',
				borderColor: '#EBEAED !important',
			},
		},
	},
})

export default theme
