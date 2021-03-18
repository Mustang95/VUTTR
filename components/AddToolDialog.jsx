import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import DialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import FormTool from '../components/FormTool'
import { useToolData } from '../context/ToolData'
import axios from 'axios'
import { generateId } from '../helpers/helpers'
import { useToolList } from '../context/ToolList'
import Snackbar from '@material-ui/core/Snackbar'
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
	},
	alignTextCenter: {
		textAlign: 'center',
	},
}))

export default function AddToolDialog() {
	const classes = useStyles()
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	//const { open, setOpen } = useFlag() // criar hook pra usar como flag
	const [open, setOpen] = useState(false)
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
	const hasInvalidFields = {
		fields: {
			title: false,
			link: false,
			description: false,
			//tags: []
		},
		hasErrors: false,
	}
	function setErrors(toolData) {
		if (toolData.title === '') {
			hasInvalidFields.fields.title = true
			hasInvalidFields.hasErrors = true
		}
		if (toolData.link === '') {
			hasInvalidFields.fields.link = true
			hasInvalidFields.hasErrors = true
		}
		if (toolData.description === '') {
			hasInvalidFields.fields.description = true
			hasInvalidFields.hasErrors = true
		}
		return hasInvalidFields
	}
	return (
		<>
			<Button
				variant='contained'
				color='secondary'
				startIcon={<AddIcon />}
				onClick={handleClickOpen}
			>
				Add
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
						<CloseIcon />
					</IconButton>
				</MuiDialogTitle>
				<DialogContent dividers>
					<FormTool
						requiredFields={hasInvalidFields.fields}
						onChange={hasInvalidFields.fields}
					/>
				</DialogContent>
				<DialogActions>
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
