import { useState, useEffect } from 'react'

import useAPI from '../../hooks/useAPI'
import CardListITooltem from '../ListItem/CardListITooltem'
import AddToolDialog from '../AddToolDialog/AddToolDialog'
import { useToolList } from '../../context/ToolList'
import ToolStateErrorsProvider from '../../context/ToolStateErrors'
import {
	Grid,
	GridItem,
	List,
	Input,
	Switch,
	Label,
	LabelSwitch,
	Slider,
	Typography,
} from './style'

export default function CardListTool() {
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
			<Grid columns={3}>
				<GridItem>
					<Input
						placeholder='Search...'
						type='search'
						value={filterValue}
						onChange={(event) => {
							setFilterValue(event.target.value)
						}}
					/>
				</GridItem>
				<GridItem>
					<LabelSwitch for='switch'>
						<Switch
							id='switch'
							type='checkbox'
							value={onlyTags}
							checked={onlyTags}
							onClick={(event) => {
								setOnlyTags(event.target.checked)
							}}
						/>
						<Slider />
					</LabelSwitch>
					<Label for='switch'>
						<Typography variant='body'>Search in tags only</Typography>
					</Label>
				</GridItem>
				<GridItem end>
					<ToolStateErrorsProvider>
						<AddToolDialog />
					</ToolStateErrorsProvider>
				</GridItem>
			</Grid>
			<List columns={1}>
				{onlyTags ? (
					<>
						{toolList
							?.filter((tag) => {
								for (let i = 0; i < tag.tags.length; i++) {
									if (filterValue === '') {
										return tag
									} else if (
										tag.tags[i]
											.toLowerCase()
											.includes(filterValue.toLowerCase())
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
			</List>
		</>
	)
}
