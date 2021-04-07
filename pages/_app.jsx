import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import ToolDataProvider from '../context/ToolData'
import ToolListProvider from '../context/ToolList'
import { theme } from '../src/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'
// import '../style/style'

export default function MyApp(props) {
	const { Component, pageProps } = props

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<React.Fragment>
			<Head>
				<title>My page</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<div suppressHydrationWarning>
					{typeof window === 'undefined' ? null : (
						<ToolListProvider>
							<ToolDataProvider>
								<Component {...pageProps} />
							</ToolDataProvider>
						</ToolListProvider>
					)}
				</div>
			</ThemeProvider>
		</React.Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}
