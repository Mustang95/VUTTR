import { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import ChipInput from 'material-ui-chip-input'
import BuildIcon from '@material-ui/icons/Build'
import LinkIcon from '@material-ui/icons/Link'
import DescriptionIcon from '@material-ui/icons/Description'
import LabelIcon from '@material-ui/icons/Label'
import { makeStyles } from '@material-ui/core/styles'

import { useToolData } from '../context/ToolData.jsx'
const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
}))
export default function FormTool() {
	const classes = useStyles()
	const { toolData, setToolData } = useToolData()
	//const [datas, setDatas] = useState({})

	const handleChange = (prop) => (event) => {
		setToolData({ ...toolData, [prop]: event?.target?.value })
		console.log(toolData)
	}
	function handleAddChip(chip) {
		//create toast msg
		toolData.tags.push(chip)
	}
	function handleDeleteChip(chip, index) {
		//create toast msg
		toolData.tags.splice(index, 1)
	}
	return (
		<div>
			<form onSubmit={handleChange}>
				<FormControl fullWidth className={classes.margin} variant='outlined'>
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
						labelWidth={80}
					/>
				</FormControl>
				<FormControl fullWidth className={classes.margin} variant='outlined'>
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
						labelWidth={70}
					/>
				</FormControl>
				<FormControl fullWidth className={classes.margin} variant='outlined'>
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
						labelWidth={120}
					/>
				</FormControl>

				<FormControl fullWidth className={classes.margin} variant='outlined'>
					<ChipInput
						label='Tags'
						variant='outlined'
						value={toolData.tags}
						onAdd={(chip) => handleAddChip(chip)}
						onDelete={(chip, index) => handleDeleteChip(chip, index)}
					/>
				</FormControl>
			</form>
		</div>
	)
}
