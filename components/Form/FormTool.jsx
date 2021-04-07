import { useToolData } from '../../context/ToolData.jsx'
import { useEffect, useState, Component } from 'react'
import { useToolStateHandlingErrors } from '../../context/ToolStateErrors.jsx'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
// import { Chips, Chip } from 'react-chips-input'
import ChipInput from 'material-ui-chip-input'
import { Input, Label, TextArea, SnackBar } from './style.jsx'

const NewChipInput = styled(ChipInput)`
	label.Mui-focused {
		color: green;
	}
	.MuiOutlinedInput-root {
		fieldset {
			border: 0;
		}
		&:hover fieldset {
			border: 0;
		}
		&.Mui-focused fieldset {
			border: 0;
		}
	}
`
const useStyles = makeStyles({
	root: {
		display: 'flex',
		backgroundColor: '#ffffff',
		border: 0,
		'&.fieldset': {
			border: 0,
			backgroundColor: 'transparent',
		},
		'&:hover fieldset': {
			border: 0,
			backgroundColor: 'transparent',
		},
		'&:Mui-focused fieldset': {
			border: 0,
			backgroundColor: 'transparent',
		},
	},
	inputRoot: {
		backgroundColor: '#F5F4F6', //outside part of input
		border: '1px solid #EBEAED',
	},
	input: {
		backgroundColor: '#F5F4F6', //inside part of input
		border: 0,
		'&:focus': {
			border: 0,
			backgroundColor: 'transparent',
		},
	},
	chipContainer: {
		backgroundColor: '#ffffff',
	},
	chip: {
		backgroundColor: '#ffffff',
		'&:focus': {
			border: 0,
			backgroundColor: 'transparent',
		},
	},
})

export default function FormTool(props) {
	const classes = useStyles()
	const { toolData, setToolData } = useToolData()
	// const { chips, setChips } = useState()

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
	//
	//

	function handleAddChip(chipValue) {
		toolData.tags.push(chipValue)
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

	function handleDeleteChip(chipValue, index) {
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
		<>
			<form onSubmit={handleChange}>
				<Label variant='body' htmlFor='title'>
					Tool name
				</Label>
				<Input
					id='title'
					required
					error={toolStateErrors.errorTitle}
					value={toolData.title}
					placeholder='Required...'
					onChange={handleChange('title')}
				/>

				<Label variant='body'>Tool Link</Label>
				<Input
					id='link'
					required
					error={toolStateErrors.errorLink}
					value={toolData.link}
					placeholder='Required...'
					onChange={handleChange('link')}
				/>

				<Label variant='body'>Tool Description</Label>
				<TextArea
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

				<Label variant='body'>Tags</Label>
				<NewChipInput
					variant='outlined'
					placeholder='Optional...'
					classes={{
						root: classes.root, // class name, e.g. `classes-nesting-root-x`
						inputRoot: classes.inputRoot, // class name, e.g. `classes-nesting-label-x`
						input: classes.input,
						chipContainer: classes.chipContainer,
						label: classes.label,
						helperText: classes.helperText,
						chip: classes.chip,
					}}
					value={toolData.tags}
					onAdd={(chipValue) => handleAddChip(chipValue)}
					onDelete={(chipValue, index) => handleDeleteChip(chipValue, index)}
				/>
			</form>
			<SnackBar
				open={openToast}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				autoHideDuration={500}
				onClose={handleClose}
				message={messageToast}
			/>
		</>
	)
}
