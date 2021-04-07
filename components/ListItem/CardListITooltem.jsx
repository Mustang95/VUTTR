import React from 'react'
import DeleteToolDialog from '../DeleteToolDialog/DeleteToolDialog'
import {
	Card,
	Title,
	Content,
	TitleAction,
	Typography,
	Link,
	Spacer,
	CardFooter,
} from './style'

export default function CardListITooltem(props) {
	const preventDefault = (event) => event.preventDefault()
	return (
		<Card key={props.item.id}>
			<Title>
				<TitleAction
					size='normal'
					color='quartiaryNeutral'
					href={props.item.link}
				>
					<Typography variant='h4' lessMargin>
						{props.item.title}
					</Typography>
				</TitleAction>

				<DeleteToolDialog
					deleteToolId={props.item.id}
					onClick={(event) => onDelete(event, props.item.id, toolList)}
				/>
			</Title>
			<Content>
				<Typography variant='body' lessMargin>
					{props.item.description}
				</Typography>
				<Spacer></Spacer>
				<CardFooter>
					{props.item.tags?.map((tag, key) => (
						<Typography
							variant='bodySmallest'
							key={key}
							onClick={preventDefault}
						>
							#{tag}{' '}
						</Typography>
					))}
				</CardFooter>
			</Content>
		</Card>
	)
}
