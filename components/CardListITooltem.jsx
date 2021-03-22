import React from 'react'
import DeleteToolDialog from '../components/DeleteToolDialog'
import useGlobalStyles from '../styles/global'
import { makeStyles } from '@material-ui/core/styles'

import {
	Typography,
	Card,
	CardHeader,
	CardContent,
	Button,
	Box,
	Link,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
	cardMargin: {
		margin: '1rem',
		backgroundColor: theme.palette.background.default,
	},
}))
export default function CardListITooltem(props) {
	const classes = useStyles()
	const globalClasses = useGlobalStyles()
	const preventDefault = (event) => event.preventDefault()

	return (
		<Card key={props.item.id} className={classes.cardMargin}>
			<CardHeader
				title={
					<Button href={props.item.link}>
						<Typography variant='h5'>{props.item.title}</Typography>
					</Button>
				}
				action={
					<DeleteToolDialog
						deleteToolId={props.item.id}
						onClick={(event) => onDelete(event, props.item.id, toolList)}
					/>
				}
			></CardHeader>
			<CardContent className={globalClasses.largePaddingLeft}>
				<Typography variant='body2' component='p'>
					{props.item.description}
				</Typography>
				<Box margin={2}></Box>
				{props.item.tags.map((tag, key) => (
					<Link
						key={key}
						component='button'
						variant='body2'
						className={globalClasses.paddingRight}
						onClick={preventDefault}
					>
						#{tag}{' '}
					</Link>
				))}
			</CardContent>
		</Card>
	)
}
