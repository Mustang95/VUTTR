import React, { createContext, useState, useContext } from 'react'
const ToolStateErrors = createContext()

export default function ToolStateErrorsProvider({ children }) {
	const [toolStateErrors, setToolStateErrors] = useState({
		errorTitle: false,
		errorLink: false,
		errorDescription: false,
	})

	return (
		<ToolStateErrors.Provider value={{ toolStateErrors, setToolStateErrors }}>
			{children}
		</ToolStateErrors.Provider>
	)
}

export function useToolStateHandlingErrors() {
	const context = useContext(ToolStateErrors)

	if (!context)
		throw new Error(
			'useToolStateHandlingErrors must be used within a ToolStateErrorsProvider'
		)

	const { toolStateErrors, setToolStateErrors } = context
	return { toolStateErrors, setToolStateErrors }
}
