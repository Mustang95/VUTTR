import React from 'react'
import DeleteToolDialog from '../DeleteToolDialog/DeleteToolDialog'
import { Card, Title, Content, TitleAction, Typography } from './style'

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
					<Typography variant='h4'>{props.item.title}</Typography>
				</TitleAction>

				<DeleteToolDialog
					deleteToolId={props.item.id}
					onClick={(event) => onDelete(event, props.item.id, toolList)}
				/>
			</Title>
			<Content>
				<Typography variant='body'>{props.item.description}</Typography>
				<div></div>
				{props.item.tags.map((tag, key) => (
					<link key={key} onClick={preventDefault}>
						#{tag}{' '}
					</link>
				))}
			</Content>
		</Card>
	)
}
