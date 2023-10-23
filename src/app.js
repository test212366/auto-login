import { Question } from './question'
import './style.css'
import { isValud } from './untils'


const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
	submitBtn.disabled = !isValud(input.value)
})

function submitFormHandler(event) {
	event.preventDefault()
	if (isValud(input.value)) {
		const qestion = {
			text: input.value.trim(),
			date: new Date().toJSON()
		}
		submitBtn.disabled = true
		// Async request to server to save question
		Question.create(qestion).then(() => {
			input.value = ''
			input.className = ''
			submitBtn.disabled = false
		})



	}
}