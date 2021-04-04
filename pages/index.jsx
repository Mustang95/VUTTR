import Head from 'next/head'
import AppBar from '../components/AppBar/AppBar'
import CardListTool from '../components/List/CardListTool'

export default function Home() {
	return (
		<div>
			<Head>
				<title> VUTTR </title>
			</Head>
			<div container justify='center'>
				<div item xs={12} sm={11} xl={8}>
					<AppBar />
					<CardListTool />
				</div>
			</div>
		</div>
	)
}
