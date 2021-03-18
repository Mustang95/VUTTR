import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import DialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import { useFlag } from '../context/ModalFlag'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import FormTool from '../components/FormTool'
import { useToolData } from '../context/ToolData'
import axios from 'axios'
import { generateId } from '../helpers/helpers'
import { useToolList } from '../context/ToolList'
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
	const { open, setOpen } = useFlag() // criar hook pra usar como flag
	const { toolData, setToolData } = useToolData()
	const { toolList, setToolList } = useToolList()
	const handleClose = () => {
		setOpen(false)
	}
	const handleChange = () => {
		const newToolData = toolData
		newToolData.id = generateId(toolList)
		setToolData(newToolData)
		const postPayload = async () => {
			try {
				const response = await axios
					.post('http://localhost:8080/tools', newToolData)
					.then((response) => {
						debugger
						console.log(response)
						//dialog success msg
						//setResponse(response.data)
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
					})
					.catch((error) => {
						console.log(error)
					})
			} catch (error) {
				console.log(error)
			}
		}
		postPayload()
	}
	return (
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
				<FormTool />
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
	)
}
