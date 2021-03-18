import useAPI from '../hooks/useAPI'
//let currentId = 10 //pegar o maior id do db.json e sertar como current id
export const generateId = (response) => {
	// const { response } = useAPI()
	debugger
	const tools = response?.sort((a, b) => {
		return a.id - b.id
	})
	let currentId = 0
	if (tools != undefined) {
		currentId = tools[tools.length - 1].id
	}
	currentId++
	return currentId
}
