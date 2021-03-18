import React, { createContext, useState, useContext } from 'react'
import { generateId } from '../helpers/helpers'
const ToolDataContext = createContext()

export default function ToolDataProvider({ children }) {
	const [toolData, setToolData] = useState({
		id: null,
		title: '',
		link: '',
		description: '',
		tags: [],
	})

	return (
		<ToolDataContext.Provider value={{ toolData, setToolData }}>
			{children}
		</ToolDataContext.Provider>
	)
}

export function useToolData() {
	const context = useContext(ToolDataContext)

	if (!context)
		throw new Error('useAgenda must be used within a ToolDataProvider')

	const { toolData, setToolData } = context
	return { toolData, setToolData }
}
