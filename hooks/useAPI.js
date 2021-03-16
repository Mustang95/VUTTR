import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAPI() {
	let [response, setResponse] = useState(null)
	useEffect(() => {
		const getURl = async () => {
			try {
				const response = await axios({
					method: 'GET',
					url: 'http://localhost:8080/tools',
				})
				setResponse(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		getURl()
	}, [])
	return { response: response }
}
