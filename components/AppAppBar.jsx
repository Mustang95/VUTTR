import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
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
