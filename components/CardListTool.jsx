import { useState, useEffect } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

import {
	Grid,
	FormControlLabel,
	Checkbox,
	Box,
	InputBase,
} from '@material-ui/core'
import useAPI from '../hooks/useAPI'
import CardListITooltem from './CardListITooltem'
import AddToolDialog from './AddToolDialog'
import { useToolList } from '../context/ToolList'
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default.main,
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
		backgroundColor: theme.palette.background.mostDarkest,
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
export default function CardListTool() {
	const classes = useStyles()
	const { response, setResponse } = useAPI()
	const { toolList, setToolList } = useToolList()
	useEffect(() => {
		let newToolList
		if (response?.length === toolList?.length) {
			newToolList = response
		} else {
			newToolList = toolList
			setToolList(newToolList)
			setResponse(newToolList)
		}
	}, [toolList])
	const [onlyTags, setOnlyTags] = useState(false)
	const [filterValue, setFilterValue] = useState('')
	return (
		<>
			<Grid container justify='center' spacing={3}>
				<Box justifyContent='flex-start' margin={3} flexShrink={1}>
					{/*  */}
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
							value={filterValue}
							onChange={(event) => {
								setFilterValue(event.target.value)
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					{/*  */}
				</Box>
				<Box flexGrow={1} justifyContent='flex-start' margin={3} flexShrink={1}>
					{/*  */}
					<FormControlLabel
						control={
							<Checkbox
								value={onlyTags}
								checked={onlyTags}
								onClick={(event) => {
									setOnlyTags(event.target.checked)
								}}
								color='primary'
								name='tag'
							/>
						}
						label='Search in tags only'
					/>
					{/*  */}
				</Box>
				<Box justifyContent='flex-end' flexShrink={1} margin={3}>
					{/*  */}
					{/* <ButtonDialog /> */}
					<AddToolDialog />
					{/*  */}
				</Box>
			</Grid>
			{onlyTags ? (
				<>
					{toolList
						?.filter((tag) => {
							for (let i = 0; i < tag.tags.length; i++) {
								if (filterValue === '') {
									return tag
								} else if (
									tag.tags[i].toLowerCase().includes(filterValue.toLowerCase())
								) {
									return tag
								}
							}
						})
						.map((item) => (
							<CardListITooltem item={item} key={item.id} />
						))}
				</>
			) : (
				<>
					{toolList
						?.filter((val) => {
							if (filterValue === '') {
								return val
							} else if (
								val.title.toLowerCase().includes(filterValue.toLowerCase())
							) {
								return val
							}
						})
						.map((item) => (
							<CardListITooltem item={item} key={item.id} />
						))}
				</>
			)}
		</>
	)
}
