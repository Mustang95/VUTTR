import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import { useFlag } from '../context/ModalFlag'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import FormTool from '../components/FormTool'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	addIcon: {
		paddingTop: theme.spacing(1),
		// color: theme.palette.grey[500],
	},
	alignTextCenter: {
		textAlign: 'center',
	},
}))

export default function AddToolDialog() {
	const classes = useStyles()
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	const { open, setOpen } = useFlag() // criar hook pra usar como flag
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<Dialog
			fullScreen={fullScreen}
			onClose={handleClose}
			aria-labelledby='customized-dialog-title'
			open={open}
		>
			<MuiDialogTitle disableTypography>
				<Typography variant='h6'>
					{/* className={classes.addIcon} className={classes.alignTextCenter}*/}
					{/* <AddIcon fontSize='Large' className={classes.addIcon} /> */}
					Add new tool
				</Typography>
				<IconButton
					aria-label='close'
					className={classes.closeButton}
					onClick={handleClose}
				>
					<CloseIcon />
				</IconButton>
			</MuiDialogTitle>
			<DialogContent dividers>
				<FormTool />
			</DialogContent>
			<DialogActions>
				<Button
					onClick={handleClose}
					color='primary'
					autoFocus
					variant='contained'
				>
					Add tool
				</Button>
			</DialogActions>
		</Dialog>
	)
}
