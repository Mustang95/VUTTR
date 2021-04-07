import { useState } from 'react'
import { generateId } from '../../helpers/helpers'
import { useToolData } from '../../context/ToolData'
import { useToolList } from '../../context/ToolList'
import { useToolStateHandlingErrors } from '../../context/ToolStateErrors'
import {
	Button,
	Typography,
	Modal,
	Header,
	ButtonClose,
	Grid,
	SnackBar,
} from './style'
import FormTool from '../Form/FormTool'
import axios from 'axios'

export default function AddToolDialog() {
	const [open, setOpen] = useState(false)
	const { toolStateErrors, setToolStateErrors } = useToolStateHandlingErrors()

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

	const handleClickOpen = () => {
		setOpen(!open)
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
				color='primaryNeutral'
				size='normal'
				lessMargin
				onClick={handleClickOpen}
			>
				Add
			</Button>
			{open ? (
				<Modal onClose={handleClose} open={open}>
					<Header>
						<div>icon plus</div>
						<Typography variant='h4'>Add new tool</Typography>
						<ButtonClose
							color='primaryDanger'
							size='small'
							aria-label='close'
							onClick={handleClose}
						>
							<img
								src='/Icon-Close-2px.svg'
								alt='close'
								height='12'
								width='12'
							/>
						</ButtonClose>
					</Header>
					<Grid>
						<FormTool
							requiredFields={hasInvalidFields.fields}
							onChange={hasInvalidFields.fields}
						/>
					</Grid>
					<div>
						<Button
							onClick={handleChange}
							color='primaryNeutral'
							size='normalModal'
						>
							Add tool
						</Button>
					</div>
				</Modal>
			) : null}
			<SnackBar
				open={openToast}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				autoHideDuration={3000}
				onClose={handleCloseToast}
				message={messageToast}
			/>
		</>
	)
}
