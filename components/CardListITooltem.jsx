import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CloseIcon from '@material-ui/icons/Close'
import { Button, Box, Link } from '@material-ui/core'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import axios from 'axios'
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
	const onDelete = (event, id) => {
		const postPayload = async () => {
			try {
				const response = await axios.delete(`http://localhost:8080/tools/${id}`)
				console.log(response)
				//dialog success msg
			} catch (error) {
				console.log(error)
			}
		}
	}
	return (
		<Card key={props.item.id} className={classes.cardMargin}>
			<CardHeader
				title={
					<Button href={props.item.link} className={classes.linkTitle}>
						{props.item.title}
					</Button>
				}
				action=''
			></CardHeader>
			<CardContent>
				<Button
					onClick={onDelete(event, props.item.id)}
					color='secondary'
					startIcon={<CloseIcon />}
				>
					remove
				</Button>
				<Typography variant='body1' color='textSecondary' component='p'>
					{props.item.description}
				</Typography>
				<Box margin={2}>{/* <Divider /> */}</Box>
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
