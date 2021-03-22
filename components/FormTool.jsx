import ChipInput from 'material-ui-chip-input'

import { useToolData } from '../context/ToolData.jsx'
import { useEffect, useState } from 'react'
import { useToolStateHandlingErrors } from '../context/ToolStateErrors.jsx'

import { makeStyles } from '@material-ui/core/styles'
import { FormControl, Typography, Snackbar, TextField } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	textInputFormat: {
		font: 'normal normal normal 20px/25px Source Sans Pro',
		letterSpacing: '0px',
	},

	cssOutlinedInput: {
		color: 'secondary',
		backgroundColor: '#F5F4F6',
		'&$cssFocused $notchedOutline': {
			border: '1px solid #DEDCE1 !important',
		},
		'&$cssFocused': {
			backgroundColor: '#EBEAED',
		},
		font: 'normal normal normal 20px/25px Source Sans Pro',
		letterSpacing: '0px',
	},

	cssFocused: {},

	notchedOutline: {
		borderWidth: '1px',
		borderColor: '#EBEAED !important',
	},
	colorStateError: {
		background: '#FEEFEE 0% 0% no-repeat padding-box',
		border: '1px solid #F95E5A',
		'&$cssFocused $notchedOutline': {
			border: '1px solid #F95E5A !important',
		},
		'&$cssFocused': {
			backgroundColor: '#FEEFEE',
		},
	},
	rootChipInput: {
		'&$focus $outlined': {
			borderColor: '#DEDCE1 !important',
			border: '1px solid #F95E5A !important',
		},
	},
}))
export default function FormTool(props) {
	const classes = useStyles()

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
				<FormControl required fullWidth margin='normal' variant='outlined'>
					<Typography className={classes.textInputFormat}>Tool name</Typography>
					<TextField
						id='title'
						required
						error={toolStateErrors.errorTitle}
						helperText={toolStateErrors.errorTitle ? 'Empty field!' : ' '}
						variant='outlined'
						value={toolData.title}
						placeholder='Required...'
						onChange={handleChange('title')}
						InputProps={{
							'aria-label': 'required...',
							classes: {
								root: toolStateErrors.errorTitle
									? classes.colorStateError
									: classes.cssOutlinedInput,
								focused: classes.cssFocused,
								notchedOutline: classes.notchedOutline,
							},
						}}
					/>
				</FormControl>
				<FormControl required fullWidth margin='normal' variant='outlined'>
					<Typography className={classes.textInputFormat}>Tool Link</Typography>
					<TextField
						id='link'
						required
						error={toolStateErrors.errorLink}
						helperText={toolStateErrors.errorLink ? 'Empty field!' : ' '}
						variant='outlined'
						value={toolData.link}
						placeholder='Required...'
						onChange={handleChange('link')}
						InputProps={{
							'aria-label': 'required...',
							classes: {
								root: toolStateErrors.errorLink
									? classes.colorStateError
									: classes.cssOutlinedInput,
								focused: classes.cssFocused,
								notchedOutline: classes.notchedOutline,
							},
						}}
					/>
				</FormControl>

				<FormControl required fullWidth margin='normal' variant='outlined'>
					<Typography className={classes.textInputFormat}>
						Tool Description
					</Typography>
					<TextField
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
						InputProps={{
							'aria-label': 'required...',
							classes: {
								root: toolStateErrors.errorDescription
									? classes.colorStateError
									: classes.cssOutlinedInput,
								focused: classes.cssFocused,
								notchedOutline: classes.notchedOutline,
							},
						}}
					/>
				</FormControl>

				<FormControl required fullWidth margin='normal' variant='outlined'>
					<Typography className={classes.textInputFormat}>Tags</Typography>
					<ChipInput
						id='tags'
						blurBehavior='ignore'
						variant='outlined'
						placeholder='Optional...'
						value={toolData.tags}
						onAdd={(chip) => handleAddChip(chip)}
						onDelete={(chip, index) => handleDeleteChip(chip, index)}
						className={classes.rootChipInput}
						// InputProps={{
						// 	'aria-label': 'optional...',
						// 	classes: {
						// 		root: classes.rootChipInput,
						// 		focused: classes.rootChipFocused,
						// 		outlined: classes.rootChipOutlined,
						// 	},
						// }}
					/>
				</FormControl>
			</form>
			<Snackbar
				open={openToast}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				autoHideDuration={500}
				onClose={handleClose}
				message={messageToast}
			></Snackbar>
		</div>
	)
}
