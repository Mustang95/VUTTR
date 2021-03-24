import { useState } from 'react'
import { useToolList } from '../context/ToolList'
import axios from 'axios'

export default function DeleteToolDialog(props) {
	const { toolList, setToolList } = useToolList()
	const [openToast, setOpenToast] = useState(false)
	const [messageToast, setMessageToast] = useState('')
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => {
		setOpen(!open)
	}
	const handleClose = () => {
		setOpen(false)
	}
	const handleCloseToast = () => {
		setOpenToast(false)
	}
	const handleDelete = async (event, props) => {
		event.preventDefault()
		try {
			const res = await axios
				.delete(`http://localhost:8080/tools/${props.deleteToolId}`)
				.then((res) => {
					const newToolList = [...toolList]
					const indexToRemove = newToolList.findIndex(
						(elem) => elem.id === props.deleteToolId
					)
					newToolList.splice(indexToRemove, 1)
					setToolList(newToolList)
				})
				.catch((error) => {
					console.log(error)
				})
		} catch (error) {
			console.log(error)
		}
	}

	const handleCancel = (event) => {
		event.preventDefault()
		setOpen(false)
	}

	return (
		<>
			<button color='default' onClick={handleClickOpen}>
				<img src='/Icon-Close-2pxRed.svg' alt='image' />
				<a>Remove</a>
			</button>
			<div onClose={handleClose} aria-labelledby='remove-tool' open={open}>
				<div>
					<a variant='h6'>Remove tool</a>
					<button aria-label='close' onClick={handleClose}>
						<img src='/Icon-Close-2px.svg' alt='image' />
					</button>
				</div>
				<div>
					<a>Are you sure you want to remove that tool?</a>
				</div>
				<div>
					<button
						onClick={(event) => handleCancel(event)}
						color='primary'
						autoFocus
						variant='contained'
					>
						<a>Cancel</a>
					</button>
					<button
						onClick={(event) => handleDelete(event, props)}
						color='secondary'
						autoFocus
						variant='contained'
					>
						<a>Yes, Remove</a>
					</button>
				</div>
			</div>
			<div
				open={openToast}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				autoHideDuration={3000}
				onClose={handleCloseToast}
				message={messageToast}
			></div>
		</>
	)
}
