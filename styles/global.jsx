import { fade, makeStyles } from '@material-ui/core/styles'

const useGlobalStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
	},
	textInputFormat: {
		font: 'normal normal normal 20px/25px Source Sans Pro',
		letterSpacing: '0px',
	},
	inputRoot: {
		color: 'secondary',
	},
	inputInput: {
		padding: theme.spacing(1.5, 1.5, 1.5, 2.2),
		background: '#F5F4F6 0% 0% no-repeat padding-box',
		border: '1px solid #EBEAED',
		borderRadius: '5px',
		opacity: 1,
	},
	cssFocused: {},
	cssLabel: {
		color: 'green',
	},
	notchedOutline: {
		borderWidth: '1px',
		borderColor: '1px solid #DEDCE1',
	},
	defaultColorButtonText: {
		color: theme.palette.background.default,
	},
	dangerColorButton: {
		backgroundColor: theme.palette.error.main,
	},
	dangerColorButtonText: {
		color: theme.palette.error.main,
	},
	paddingRight: {
		paddingRight: '16px',
	},
	largePaddingLeft: {
		paddingLeft: '25px',
	},
}))

export default useGlobalStyles
