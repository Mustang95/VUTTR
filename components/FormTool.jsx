import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import ChipInput from 'material-ui-chip-input'
import BuildIcon from '@material-ui/icons/Build'
import LinkIcon from '@material-ui/icons/Link'
import DescriptionIcon from '@material-ui/icons/Description'
import LabelIcon from '@material-ui/icons/Label'
import { makeStyles } from '@material-ui/core/styles'
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing(1),
	},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	textField: {
		width: '25ch',
	},
}))
export default function FormTool() {
	const classes = useStyles()
	const [values, setValues] = React.useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	})

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}
	function handleAddChip() {}
	function handleDeleteChip() {}
	return (
		<div>
			<FormGroup>
				<FormControl fullWidth className={classes.margin} variant='outlined'>
					<InputLabel htmlFor='filled-adornment-password'>Tool Name</InputLabel>
					<OutlinedInput
						id='outlined-adornment-amount'
						value=''
						onChange={handleChange('amount')}
						startAdornment={
							<InputAdornment position='start'>
								<BuildIcon />
							</InputAdornment>
						}
						labelWidth={80}
					/>
				</FormControl>
				<FormControl fullWidth className={classes.margin} variant='outlined'>
					<InputLabel htmlFor='filled-adornment-password'>Tool Name</InputLabel>
					<OutlinedInput
						id='outlined-adornment-amount'
						value=''
						onChange={handleChange('amount')}
						startAdornment={
							<InputAdornment position='start'>
								<LinkIcon />
							</InputAdornment>
						}
						labelWidth={80}
					/>
				</FormControl>
				<FormControl fullWidth className={classes.margin} variant='outlined'>
					<InputLabel htmlFor='filled-adornment-password'>Tool Name</InputLabel>
					<OutlinedInput
						id='outlined-adornment-amount'
						value=''
						onChange={handleChange('amount')}
						startAdornment={
							<InputAdornment position='start'>
								<DescriptionIcon />
							</InputAdornment>
						}
						labelWidth={80}
					/>
				</FormControl>

				<FormControl fullWidth className={classes.margin} variant='outlined'>
					<ChipInput
						label='Tags'
						variant='outlined'
						value=''
						onAdd={(chip) => handleAddChip(chip)}
						onDelete={(chip, index) => handleDeleteChip(chip, index)}
						startAdornment={
							<InputAdornment position='start'>
								<LabelIcon />
							</InputAdornment>
						}
					/>
				</FormControl>
			</FormGroup>
		</div>
	)
}
