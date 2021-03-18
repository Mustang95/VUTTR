import React from 'react'
import { useFlag } from '../context/ModalFlag'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

export default function ButtonDialog() {
	const { open, setOpen } = useFlag() //criar hook pra usar como flag
	const handleClickOpen = () => {
		setOpen(!open)
	}
	return (
		<Button
			variant='contained'
			color='secondary'
			startIcon={<AddIcon />}
			onClick={handleClickOpen}
		>
			Add
		</Button>
	)
}
