import { useState, useEffect } from 'react'

import useAPI from '../hooks/useAPI'
import CardListITooltem from './CardListITooltem'
import AddToolDialog from './AddToolDialog'
import { useToolList } from '../context/ToolList'
import ToolStateErrorsProvider from '../context/ToolStateErrors'

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
			<div container justify='center'>
				<div justifyContent='flex-start' flexShrink={1}>
					<input
						placeholder='Search...'
						type='search'
						value={filterValue}
						onChange={(event) => {
							setFilterValue(event.target.value)
						}}
					/>
				</div>
				<div flexGrow={1} justifyContent='flex-start' flexShrink={1}>
					<input
						value={onlyTags}
						checked={onlyTags}
						onClick={(event) => {
							setOnlyTags(event.target.checked)
						}}
						label='Search in tags only'
					/>
				</div>
				<div justifyContent='flex-end' flexShrink={1}>
					<ToolStateErrorsProvider>
						<AddToolDialog />
					</ToolStateErrorsProvider>
				</div>
			</div>
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
