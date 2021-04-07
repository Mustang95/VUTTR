//
const myInput = document.querySelectorAll('Input'),
	mySpan = document.querySelectorAll('span')

let counter = 0
console.log(counter)
function debounce(func, wait) {
	let timer = null
	return function () {
		clearTimeout(timer)
		timer = setTimeout(func, wait)
	}
}

myInput.addEventListener(
	'input',
	debounce(function () {
		mySpan.innerText = ++counter
	}, 500)
)
//
