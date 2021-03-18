import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: '#F95E5A',
		},
		success: {
			main: '#12DB89',
		},
		background: {
			default: '#fff',
		},
	},
})

export default theme
