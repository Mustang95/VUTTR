import Head from 'next/head'
import AppBar from '../components/AppBar/AppBar'
import CardListTool from '../components/List/CardListTool'

export default function Home() {
	return (
		<div>
			<Head>
				<title> VUTTR </title>
			</Head>
			<div>
				<div>
					<AppBar />
					<CardListTool />
				</div>
			</div>
		</div>
	)
}
