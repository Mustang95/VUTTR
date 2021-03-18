import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import AppAppBar from '../components/AppAppBar'
import CardListTool from '../components/CardListTool'
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default.main,
	},
}))
export default function Home() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Head>
				<title> Início | Books</title>
			</Head>
			<Grid container justify='center'>
				<Grid item xs={12} sm={11} xl={8}>
					<AppAppBar />
					<CardListTool />
				</Grid>
			</Grid>
		</div>
	)
}
