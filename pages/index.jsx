import Head from 'next/head'
import AppAppBar from '../components/AppAppBar'
import CardListTool from '../components/CardListTool'

export default function Home() {
	return (
		<div>
			<Head>
				<title> VUTTR </title>
			</Head>
			<div container justify='center'>
				<div item xs={12} sm={11} xl={8}>
					<AppAppBar />
					<CardListTool />
				</div>
			</div>
		</div>
	)
}
