import { useToolData } from '../context/ToolData.jsx'
import { useEffect, useState } from 'react'
import { useToolStateHandlingErrors } from '../context/ToolStateErrors.jsx'

export default function FormTool(props) {
	const { toolData, setToolData } = useToolData()

	const [openToast, setOpenToast] = useState(false)

	const [errorTitle, setErrorTitle] = useState(false)
	const [errorLink, setErrorLink] = useState(false)
	const [errorDesc, setErrorDescription] = useState(false)

	const [messageToast, setMessageToast] = useState('')
	const { toolStateErrors, setToolStateErrors } = useToolStateHandlingErrors()

	const handleChange = (prop) => (event) => {
		setToolData({ ...toolData, [prop]: event?.target?.value })
		if (prop === 'title') {
			toolStateErrors.errorTitle = false
			prop.length > 0
				? setToolStateErrors({
						errorTitle: toolStateErrors.errorTitle,
						errorLink: toolStateErrors.errorLink,
						errorDescription: toolStateErrors.errorDescription,
				  })
				: setToolStateErrors({
						errorTitle: !toolStateErrors.errorTitle,
						errorLink: toolStateErrors.errorLink,
						errorDescription: toolStateErrors.errorDescription,
				  })
		}
		if (prop === 'link') {
			toolStateErrors.errorLink = false
			prop.length > 0
				? setToolStateErrors({
						errorTitle: toolStateErrors.errorTitle,
						errorLink: toolStateErrors.errorLink,
						errorDescription: toolStateErrors.errorDescription,
				  })
				: setToolStateErrors({
						errorTitle: toolStateErrors.errorTitle,
						errorLink: toolStateErrors.errorLink,
						errorDescription: toolStateErrors.errorDescription,
				  })
		}
		if (prop === 'description') {
			toolStateErrors.errorDescription = false
			prop.length > 0
				? setToolStateErrors({
						errorTitle: toolStateErrors.errorTitle,
						errorLink: toolStateErrors.errorLink,
						errorDescription: toolStateErrors.errorDescription,
				  })
				: setToolStateErrors({
						errorTitle: toolStateErrors.errorTitle,
						errorLink: toolStateErrors.errorLink,
						errorDescription: toolStateErrors.errorDescription,
				  })
		}
	}
	const handleClose = (event, reason) => {
		if (reason === 'timeout') {
			setOpenToast(!openToast)
		}
	}
	function handleAddChip(chip) {
		toolData.tags.push(chip)
		messageTagAdded()
	}

	function messageTagAdded() {
		setOpenToast(false)
		setOpenToast(!openToast)
		setMessageToast('Tag added!')
	}
	function messageTagRemmoved() {
		setOpenToast(false)
		setOpenToast(!openToast)
		setMessageToast('Tag removed!')
	}

	function handleDeleteChip(chip, index) {
		const newToolData = toolData
		newToolData.tags.splice(index, 1)
		setToolData(newToolData)
		messageTagRemmoved()
	}
	useEffect(() => {
		setErrorTitle(toolStateErrors.errorTitle) ///toolStateErrors.errorTitle props.requiredFields.title
		setErrorLink(toolStateErrors.errorLink) ///toolStateErrors.errorLink props.requiredFields.link
		setErrorDescription(toolStateErrors.errorDescription) ///toolStateErrors.errorDescription props.requiredFields.description
		setToolData(toolData)
	}, [errorTitle, errorLink, errorDesc, toolData]) //errorTitle, errorLink, errorDesc
	console.log(errorTitle)
	return (
		<div>
			<form onSubmit={handleChange}>
				<a>Tool name</a>
				<input
					id='title'
					required
					error={toolStateErrors.errorTitle}
					value={toolData.title}
					placeholder='Required...'
					onChange={handleChange('title')}
				/>

				<a>Tool Link</a>
				<input
					id='link'
					required
					error={toolStateErrors.errorLink}
					value={toolData.link}
					placeholder='Required...'
					onChange={handleChange('link')}
				/>

				<a>Tool Description</a>
				<input
					id='description'
					required
					error={toolStateErrors.errorDescription}
					helperText={toolStateErrors.errorDescription ? 'Empty field!' : ' '}
					variant='outlined'
					multiline
					rowsMax={4}
					rows='3'
					placeholder='Required...'
					value={toolData.description}
					onChange={handleChange('description')}
				/>

				<a>Tags</a>
				<input
					id='tags'
					placeholder='Optional...'
					value={toolData.tags}
					onAdd={(chip) => handleAddChip(chip)}
					onDelete={(chip, index) => handleDeleteChip(chip, index)}
				/>
			</form>
			<div
				open={openToast}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				autoHideDuration={500}
				onClose={handleClose}
				message={messageToast}
			/>
		</div>
	)
}
