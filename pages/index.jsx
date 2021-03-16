import Head from 'next/head'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import DeleteIcon from '@material-ui/icons/Delete'
import { fade, makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'

import {
	Grid,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	IconButton,
	Box,
	Link,
	Divider,
	StylesProvider,
	InputBase,
} from '@material-ui/core'
import useAPI from '../hooks/useAPI'
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
	search: {
		position: 'relative',

		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'secondary',
	},
	inputInput: {
		backgroundColor: '#4c44444d',
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}))

export default function Home() {
	const classes = useStyles()
	const { response } = useAPI()
	const preventDefault = (event) => event.preventDefault()
	return (
		<div>
			<Head>
				<title> Início | Books</title>
			</Head>
			<Grid container justify='center' spacing={3}>
				<Grid item xs={12} sm={11} xl={8}>
					<Typography variant='h1'>VUTTR</Typography>
					<Typography variant='h4'>Very Useful Tools to Remember</Typography>
					<Grid container justify='center' spacing={3}>
						{/* <Box display='flex' flexShrink={4}> */}
						<Box justifyContent='flex-start' margin={3} flexShrink={1}>
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder='Search…'
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ 'aria-label': 'search' }}
								/>
							</div>
						</Box>
						<Box
							flexGrow={1}
							justifyContent='flex-start'
							margin={3}
							flexShrink={1}
						>
							<FormControlLabel
								control={<Checkbox name='gilad' />}
								label='Gilad Gray'
							/>
						</Box>
						<Box justifyContent='flex-end' flexShrink={1} margin={3}>
							<Button
								variant='contained'
								color='secondary'
								startIcon={<AddIcon />}
							>
								Add
							</Button>
						</Box>
						{/* </Box> */}
					</Grid>
					{response?.map((item) => (
						<Card key={item.id} className={classes.cardMargin}>
							<CardHeader
								title={
									<Link
										component='button'
										variant='body2'
										onClick={preventDefault}
										className={classes.linkTitle}
									>
										{item.title}
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
									{item.description}
								</Typography>
								<Box margin={2}>{/* <Divider /> */}</Box>
								{item.tags.map((tag, key) => (
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
					))}
				</Grid>
			</Grid>
		</div>
	)
}
