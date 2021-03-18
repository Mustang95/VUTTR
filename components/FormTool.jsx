import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import ChipInput from 'material-ui-chip-input'
import BuildIcon from '@material-ui/icons/Build'
import LinkIcon from '@material-ui/icons/Link'
import DescriptionIcon from '@material-ui/icons/Description'
import Snackbar from '@material-ui/core/Snackbar'
import { makeStyles } from '@material-ui/core/styles'

import { useToolData } from '../context/ToolData.jsx'
import { useEffect, useState } from 'react'
const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
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

	const handleChange = (prop) => (event) => {
		setToolData({ ...toolData, [prop]: event?.target?.value })
	}
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpenToast(false)
	}
	function handleAddChip(chip) {
		toolData.tags.push(chip)
		setOpenToast(true)
		setMessageToast('Tag added!')
	}
	function handleDeleteChip(chip, index) {
		setOpenToast(true)
		setMessageToast('Tag removed!')
		const newToolData = toolData
		newToolData.tags.splice(index, 1)
		setToolData(newToolData)
	}
	useEffect(() => {
		setErrorTitle(props.requiredFields.title)
		setErrorLink(props.requiredFields.link)
		setErrorDescription(props.requiredFields.description)
		setToolData(toolData)
	}, [errorTitle, errorLink, errorDesc, toolData])

	return (
		<div>
			<form onSubmit={handleChange}>
				<FormControl
					required
					error={errorTitle}
					fullWidth
					className={classes.margin}
					variant='outlined'
				>
					<InputLabel htmlFor='filled-adornment-password'>Tool Name</InputLabel>
					<OutlinedInput
						id='title'
						value={toolData.title}
						onChange={handleChange('title')}
						startAdornment={
							<InputAdornment position='start'>
								<BuildIcon />
							</InputAdornment>
						}
						labelWidth={90}
					/>
				</FormControl>
				<FormControl
					required
					error={errorLink}
					fullWidth
					className={classes.margin}
					variant='outlined'
				>
					<InputLabel htmlFor='filled-adornment-password'>Tool Link</InputLabel>
					<OutlinedInput
						id='link'
						value={toolData.link}
						onChange={handleChange('link')}
						startAdornment={
							<InputAdornment position='start'>
								<LinkIcon />
							</InputAdornment>
						}
						labelWidth={80}
					/>
				</FormControl>
				<FormControl
					required
					error={errorDesc}
					fullWidth
					className={classes.margin}
					variant='outlined'
				>
					<InputLabel htmlFor='filled-adornment-password'>
						Tool description
					</InputLabel>
					<OutlinedInput
						id='description'
						value={toolData.description}
						onChange={handleChange('description')}
						startAdornment={
							<InputAdornment position='start'>
								<DescriptionIcon />
							</InputAdornment>
						}
						labelWidth={130}
					/>
				</FormControl>

				<FormControl
					// required
					// error={error}
					fullWidth
					className={classes.margin}
					variant='outlined'
				>
					<ChipInput
						label='Tags'
						variant='outlined'
						value={toolData.tags}
						onAdd={(chip) => handleAddChip(chip)}
						onDelete={(chip, index) => handleDeleteChip(chip, index)}
					/>
				</FormControl>
			</form>
			<Snackbar
				open={openToast}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				autoHideDuration={3000}
				onClose={handleClose}
				message={messageToast}
			></Snackbar>
		</div>
	)
}
