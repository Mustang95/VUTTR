import { useState } from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import { useToolData } from '../context/ToolData'
import { generateId } from '../helpers/helpers'
import { useToolList } from '../context/ToolList'
import useGlobalStyles from '../styles/global'
import FormTool from '../components/FormTool'
import axios from 'axios'

import {
	Button,
	Dialog,
	DialogActions,
	Typography,
	DialogContent,
	useMediaQuery,
	IconButton,
	Snackbar,
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { useToolStateHandlingErrors } from '../context/ToolStateErrors'

const useStyles = makeStyles((theme) => ({
	closeIcon: {
		width: '15px',
		height: '15px',
	},
	closeButton: {
		right: theme.spacing(1),
		position: 'absolute',
		top: theme.spacing(1),
		color: theme.palette.grey[500],
		margin: '0.7rem 0.5rem 1rem 1rem',
	},
	actionMargin: {
		margin: '1rem 1rem 1rem 1rem',
	},
}))

export default function AddToolDialog() {
	const classes = useStyles()
	const globalClasses = useGlobalStyles()
	const theme = useTheme()

	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	const [open, setOpen] = useState(false)
	const { toolStateErrors, setToolStateErrors } = useToolStateHandlingErrors()

	const handleClickOpen = () => {
		setOpen(!open)
	}
	const [openToast, setOpenToast] = useState(false)
	const [messageToast, setMessageToast] = useState('')
	const { toolData, setToolData } = useToolData()
	const { toolList, setToolList } = useToolList()
	const handleClose = () => {
		setOpen(false)
	}
	const handleCloseToast = () => {
		setOpenToast(false)
	}

	const hasInvalidFields = {
		fields: {
			title: toolStateErrors.errorTitle,
			link: toolStateErrors.errorLink,
			description: toolStateErrors.errorDescription,
		},
		hasErrors: false,
	}

	function setErrors(toolData) {
		debugger
		if (toolData.title === '') {
			hasInvalidFields.fields.title = true
			hasInvalidFields.hasErrors = true
		} else {
			hasInvalidFields.fields.title = false
		}
		if (toolData.link === '') {
			hasInvalidFields.fields.link = true
			hasInvalidFields.hasErrors = true
		} else {
			hasInvalidFields.fields.link = false
		}
		if (toolData.description === '') {
			hasInvalidFields.fields.description = true
			hasInvalidFields.hasErrors = true
		} else {
			hasInvalidFields.fields.description = false
		}
		setToolStateErrors({
			errorTitle: hasInvalidFields.fields.title,
			errorLink: hasInvalidFields.fields.link,
			errorDescription: hasInvalidFields.fields.description,
		})
		return hasInvalidFields
	}

	const handleChange = () => {
		const newToolData = toolData
		const hasInvalidFields = setErrors(newToolData)
		if (!hasInvalidFields.hasErrors) {
			newToolData.id = generateId(toolList)
			setToolData(newToolData)
			const postPayload = async () => {
				try {
					const response = await axios
						.post('http://localhost:8080/tools', newToolData)
						.then((response) => {
							const newToolList = [...toolList]
							newToolList.push(response.data)
							setToolList(newToolList)
							setToolData({
								id: generateId(),
								title: '',
								link: '',
								description: '',
								tags: [],
							})
							handleClose()
							setOpenToast(true)
							setMessageToast('New Tool Added')
						})
						.catch((error) => {
							console.log(error)
						})
				} catch (error) {
					console.log(error)
				}
			}
			postPayload()
		} else {
			//
			setOpenToast(true)
			setMessageToast('Please fill the required fields')
		}
	}

	return (
		<>
			<Button
				variant='contained'
				color='primary'
				startIcon={
					<AddIcon
						fontSize='large'
						className={globalClasses.defaultColorButtonText}
					/>
				}
				onClick={handleClickOpen}
			>
				<Typography className={globalClasses.defaultColorButtonText}>
					Add
				</Typography>
			</Button>
			<Dialog
				fullScreen={fullScreen}
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<MuiDialogTitle disableTypography>
					<Typography variant='h6'>Add new tool</Typography>
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
					<FormTool
						requiredFields={hasInvalidFields.fields}
						onChange={hasInvalidFields.fields}
					/>
				</DialogContent>
				<DialogActions className={classes.actionMargin}>
					<Button
						onClick={handleChange}
						color='primary'
						autoFocus
						variant='contained'
					>
						Add tool
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
