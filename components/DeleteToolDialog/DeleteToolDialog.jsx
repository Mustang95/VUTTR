import { useState } from 'react'
import { useToolList } from '../../context/ToolList'
import axios from 'axios'
import { ButtonClose, Button, Modal, Title, Actions, Typography } from './style'
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
			<ButtonClose
				color='primaryDanger'
				size='small'
				LargeMarginTop
				onClick={handleClickOpen}
			>
				<img src='/Icon-Delete-2pxRed.svg' alt='close' height='25' width='25' />
				<Typography variant='bodySmall' normalPaddingLeft>
					Remove
				</Typography>
			</ButtonClose>
			{open ? (
				<Modal onClose={handleClose} open={open}>
					<Title>
						<Typography variant='h4'>Remove tool</Typography>
						<ButtonClose onClick={handleClose}>
							<img
								src='/Icon-Close-2px.svg'
								alt='image'
								height='12'
								width='12'
							/>
						</ButtonClose>
					</Title>
					<div>
						<Typography variant='body' normalMargin>
							Are you sure you want to remove that tool?
						</Typography>
					</div>
					<Actions>
						<div></div>
						<div></div>
						<Button
							onClick={(event) => handleCancel(event)}
							color='secondaryNeutral'
							size='normal'
						>
							Cancel
						</Button>
						<Button
							onClick={(event) => handleDelete(event, props)}
							color='primaryDanger'
							size='normal'
						>
							Yes, Remove
						</Button>
					</Actions>
				</Modal>
			) : null}
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
