import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useToolList } from '../context/ToolList'
import useGlobalStyles from '../styles/global'
import axios from 'axios'

import {
	Button,
	Dialog,
	DialogActions,
	Typography,
	DialogContent,
	IconButton,
	Snackbar,
} from '@material-ui/core'

import MuiDialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles((theme) => ({
	closeIcon: {
		width: '15px',
		height: '15px',
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
		margin: '0.7rem 0.5rem 1rem 1rem',
	},
	removeButtonMargin: {
		margin: '0px 8px 0px 0px',
	},

	actionMargin: {
		margin: '1rem 1rem 1rem 1rem',
	},
	actionMarginRight: {
		marginRight: '1rem',
	},
}))

export default function DeleteToolDialog(props) {
	const classes = useStyles()
	const globalClasses = useGlobalStyles()
	const { toolList, setToolList } = useToolList()
	const [openToast, setOpenToast] = useState(false)
	const [messageToast, setMessageToast] = useState('')
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
				color='default'
				startIcon={
					<img
						src='/Icon-Close-2pxRed.svg'
						alt='image'
						className={classes.closeIcon}
					/>
					// <CloseIcon className={globalClasses.dangerColorButtonText} />
				}
				onClick={handleClickOpen}
			>
				<Typography
					className={`${globalClasses.dangerColorButtonText} ${classes.removeButtonMargin}`}
				>
					Remove
				</Typography>
			</Button>
			<Dialog onClose={handleClose} aria-labelledby='remove-tool' open={open}>
				<MuiDialogTitle disableTypography>
					<Typography variant='h6'>Remove tool</Typography>
					<IconButton
						aria-label='close'
						className={classes.closeButton}
						onClick={handleClose}
					>
						<img
							src='/Icon-Close-2px.svg'
							alt='image'
							className={classes.closeIcon}
						/>
					</IconButton>
				</MuiDialogTitle>
				<DialogContent>
					<Typography>Are you sure you want to remove that tool?</Typography>
				</DialogContent>
				<DialogActions className={classes.actionMargin}>
					<Button
						onClick={(event) => handleCancel(event)}
						color='primary'
						className={classes.actionMarginRight}
						autoFocus
						variant='contained'
					>
						<Typography className={globalClasses.defaultColorButtonText}>
							Cancel
						</Typography>
					</Button>
					<Button
						onClick={(event) => handleDelete(event, props)}
						color='secondary'
						autoFocus
						variant='contained'
					>
						<Typography className={globalClasses.defaultColorButtonText}>
							Yes, Remove
						</Typography>
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
