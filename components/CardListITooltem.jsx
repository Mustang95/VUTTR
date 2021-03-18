import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CloseIcon from '@material-ui/icons/Close'
import { Button, Box, Link } from '@material-ui/core'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
	linkTitle: {
		fontWeight: '600',
		fontSize: '1.8rem',
	},
	cardMargin: {
		margin: '1rem',
	},
}))
export default function CardListITooltem(props) {
	const classes = useStyles()
	const preventDefault = (event) => event.preventDefault()
	return (
		<Card key={props.item.id} className={classes.cardMargin}>
			<CardHeader
				title={
					<Link
						component='button'
						variant='body2'
						onClick={preventDefault}
						className={classes.linkTitle}
					>
						{props.item.title}
					</Link>
				}
				action={
					<Button color='secondary' startIcon={<CloseIcon />}>
						remove
					</Button>
				}
			></CardHeader>
			<CardContent>
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
