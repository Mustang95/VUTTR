import React, { createContext, useState, useContext, useEffect } from 'react'
const ToolListContext = createContext()

export default function ToolListProvider({ children }) {
	const [toolList, setToolList] = useState([])

	return (
		<ToolListContext.Provider value={{ toolList, setToolList }}>
			{children}
		</ToolListContext.Provider>
	)
}

export function useToolList() {
	const context = useContext(ToolListContext)

	if (!context)
		throw new Error('useToolList must be used within a ToolListProvider')

	const { toolList, setToolList } = context
	return { toolList, setToolList }
}
