import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	headerMargin: {
		margin: '1rem',
	},
}))

export default function AppAppBar() {
	const classes = useStyles()
	return (
		<header className={classes.headerMargin}>
			<Typography variant='h1'>VUTTR</Typography>
			<Typography variant='h4'>Very Useful Tools to Remember</Typography>
		</header>
	)
}
