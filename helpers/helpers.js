export const generateId = (response) => {
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
