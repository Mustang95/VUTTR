import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import DialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles, createMuiTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Snackbar from '@material-ui/core/Snackbar'
import { useToolList } from '../context/ToolList'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
}))
const theme = createMuiTheme({})

export default function DeleteToolDialog(props) {
	const classes = useStyles()
	//const { open, setOpen } = useFlag() // criar hook pra usar como flag
	const [openToast, setOpenToast] = useState(false)
	const [messageToast, setMessageToast] = useState('')
	const { toolList, setToolList } = useToolList()
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => {
		setOpen(!open)
	}
	const handleClose = () => {
		setOpen(false)
	}
	const handleCloseToast = () => {
		setOpenToast(false)
	}
	const handleDelete = async (event, props) => {
		//responseAux
		event.preventDefault()
		try {
			const res = await axios
				.delete(`http://localhost:8080/tools/${props.deleteToolId}`)
				.then((res) => {
					const newToolList = [...toolList]
					const indexToRemove = newToolList.findIndex(
						(elem) => elem.id === props.deleteToolId
					)
					newToolList.splice(indexToRemove, 1)
					setToolList(newToolList)
				})
				.catch((error) => {
					console.log(error)
				})
		} catch (error) {
			console.log(error)
		}
	}
	const handleCancel = (event) => {
		event.preventDefault()
		setOpen(false)
	}

	return (
		<>
			<Button
				color='secondary'
				startIcon={<CloseIcon />}
				onClick={handleClickOpen}
			>
				Remove
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<MuiDialogTitle disableTypography>
					<Typography variant='h6'>Remove tool</Typography>
					<IconButton
						aria-label='close'
						className={classes.closeButton}
						onClick={handleClose}
					>
						<CloseIcon />
					</IconButton>
				</MuiDialogTitle>
				<DialogContent dividers>
					<Typography>Are you sure you want to remove that tool?</Typography>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={(event) => handleCancel(event)}
						color='default'
						autoFocus
						variant='contained'
					>
						Cancel
					</Button>
					<Button
						onClick={(event) => handleDelete(event, props)}
						color='secondary'
						autoFocus
						variant='contained'
					>
						Yes, remove
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				open={openToast}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				autoHideDuration={3000}
				onClose={handleCloseToast}
				message={messageToast}
			></Snackbar>
		</>
	)
}
