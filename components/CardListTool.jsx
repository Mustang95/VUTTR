import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import useAPI from '../hooks/useAPI'
import CardListITooltem from './CardListITooltem'
import AddToolDialog from './AddToolDialog'
import { useToolList } from '../context/ToolList'
import ToolStateErrorsProvider from '../context/ToolStateErrors'

import {
	Grid,
	FormControlLabel,
	Checkbox,
	Box,
	FormControl,
	TextField,
	InputAdornment,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default.main,
	},
	marginRight: {
		marginRight: '1rem',
	},
	miniPadding: {
		padding: '5px 0px 0px 5px',
	},
	marginLeft: {
		marginLeft: '1rem',
	},
	cssOutlinedInput: {
		color: 'secondary',
		backgroundColor: '#F5F4F6',
		'&$cssFocused $notchedOutline': {
			border: '1px solid #DEDCE1 !important',
		},
		'&$cssFocused': {
			backgroundColor: '#EBEAED',
		},
		font: 'normal normal normal 20px/25px Source Sans Pro',
		letterSpacing: '0px',
	},

	cssFocused: {},

	notchedOutline: {
		borderWidth: '1px',
		borderColor: '#EBEAED !important',
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
			<Grid container justify='center'>
				<Box justifyContent='flex-start' flexShrink={1}>
					<FormControl className={classes.marginLeft} variant='outlined'>
						<TextField
							variant='outlined'
							placeholder='Search...'
							type='search'
							InputProps={{
								'aria-label': 'search...',
								startAdornment: (
									<InputAdornment position='start'>
										<img
											src='/Icon-Search-2px.svg'
											alt='image'
											width='25'
											height='25'
										/>
									</InputAdornment>
								),
								classes: {
									root: classes.cssOutlinedInput,
									focused: classes.cssFocused,
									notchedOutline: classes.notchedOutline,
								},
							}}
							value={filterValue}
							onChange={(event) => {
								setFilterValue(event.target.value)
							}}
						/>
					</FormControl>
				</Box>
				<Box
					flexGrow={1}
					justifyContent='flex-start'
					flexShrink={1}
					className={classes.marginLeft}
				>
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
				</Box>
				<Box
					justifyContent='flex-end'
					flexShrink={1}
					className={`${classes.marginRight} ${classes.miniPadding}`}
				>
					<ToolStateErrorsProvider>
						<AddToolDialog />
					</ToolStateErrorsProvider>
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
