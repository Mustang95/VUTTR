import { useState, useEffect } from 'react'
import axios from 'axios'
import { useToolList } from '../context/ToolList'

export default function useAPI() {
	let [response, setResponse] = useState(null)
	const { toolList, setToolList } = useToolList()
	useEffect(() => {
		const getURl = async () => {
			try {
				const response = await axios({
					method: 'GET',
					url: 'http://localhost:8080/tools',
				})
				setResponse(response.data)
				setToolList(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		getURl()
	}, [])
	return { response: response, setResponse }
}
