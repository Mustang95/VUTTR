import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	headerMargin: {
		margin: '1rem',
	},
	headerLetterSpacing: {
		letterSpacing: '0.4px',
	},
}))
export default function AppAppBar() {
	const classes = useStyles()
	//className={classes.fontHeader}
	return (
		<header>
			<Typography variant='h1'>VUTTR</Typography>
			<Typography variant='h4' className={classes.headerLetterSpacing}>
				Very Useful Tools to Remember
			</Typography>
		</header>
	)
}
