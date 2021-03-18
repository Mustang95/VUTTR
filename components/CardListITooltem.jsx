import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CloseIcon from '@material-ui/icons/Close'
import { Button, Box, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useToolList } from '../context/ToolList'
const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
	linkTitle: {
		fontWeight: '600',
		fontSize: '1.5rem',
	},
	cardMargin: {
		margin: '1rem',
	},
}))
export default function CardListITooltem(props) {
	const classes = useStyles()
	const preventDefault = (event) => event.preventDefault()
	const { toolList, setToolList } = useToolList()
	//console.log(response)
	console.log(toolList)

	const onDelete = async (event, id, toolList) => {
		console.log(toolList)

		//responseAux
		event.preventDefault()
		try {
			const res = await axios
				.delete(`http://localhost:8080/tools/${id}`)
				.then((res) => {
					console.log(res)
					const newToolList = [...toolList]
					const indexToRemove = newToolList.findIndex(
						(elem) => elem.id === props.item.id
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
		//dialog success msg
	}
	return (
		<Card key={props.item.id} className={classes.cardMargin}>
			<CardHeader
				title={
					<Button href={props.item.link} className={classes.linkTitle}>
						{props.item.title}
					</Button>
				}
				action={
					<Button
						onClick={(event) => onDelete(event, props.item.id, toolList)}
						color='secondary'
						startIcon={<CloseIcon />}
					>
						remove
					</Button>
				}
			></CardHeader>
			<CardContent>
				<Typography variant='body1' color='textSecondary' component='p'>
					{props.item.description}
				</Typography>
				<Box margin={2}></Box>
				{props.item.tags.map((tag, key) => (
					<Link
						key={key}
						component='button'
						variant='body2'
						onClick={preventDefault}
					>
						#{tag}{' '}
					</Link>
				))}
			</CardContent>
		</Card>
	)
}
