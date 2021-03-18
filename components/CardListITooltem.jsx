import React from 'react'
import DeleteToolDialog from '../components/DeleteToolDialog'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Button, Box, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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
		backgroundColor: theme.palette.background.darker,
	},
}))
export default function CardListITooltem(props) {
	const classes = useStyles()
	const preventDefault = (event) => event.preventDefault()

	return (
		<Card key={props.item.id} className={classes.cardMargin}>
			<CardHeader
				title={
					<Button href={props.item.link} className={classes.linkTitle}>
						{props.item.title}
					</Button>
				}
				action={
					<DeleteToolDialog
						deleteToolId={props.item.id}
						onClick={(event) => onDelete(event, props.item.id, toolList)}
					/>
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
