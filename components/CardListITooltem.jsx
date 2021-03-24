import React from 'react'
import DeleteToolDialog from '../components/DeleteToolDialog'

export default function CardListITooltem(props) {
	const preventDefault = (event) => event.preventDefault()

	return (
		<div key={props.item.id}>
			<div
				title={
					<button href={props.item.link}>
						<h5>{props.item.title}</h5>
					</button>
				}
				action={
					<DeleteToolDialog
						deleteToolId={props.item.id}
						onClick={(event) => onDelete(event, props.item.id, toolList)}
					/>
				}
			></div>
			<div>
				<p>{props.item.description}</p>
				<div></div>
				{props.item.tags.map((tag, key) => (
					<link key={key} onClick={preventDefault}>
						#{tag}{' '}
					</link>
				))}
			</div>
		</div>
	)
}
