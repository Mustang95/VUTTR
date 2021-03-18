import React, { createContext, useState, useContext } from 'react'

const ModalFlagContext = createContext()

export default function ModalFlagProvider({ children }) {
	const initStateFlag = false
	const [open, setOpen] = useState(initStateFlag)
	return (
		<>
			<ModalFlagContext.Provider value={{ open, setOpen }}>
				{children}
			</ModalFlagContext.Provider>
		</>
	)
}

export function useFlag() {
	const context = useContext(ModalFlagContext)

	if (!context)
		throw new Error('useFlag must be used within a ModalFlagProvider')

	const { open, setOpen } = context
	return { open, setOpen }
}
