import { Input } from '../components/Input.js'
import { Keyboard } from '../components/Keyboard.js'
import { gameRules } from './gameRules.js'

/**
  * @param {HTMLDivElement[]} boardRows
*/
export function mountBoard(boardRows) {
  boardRows.forEach(row => {
  for(let i = gameRules.wordCount; i > 0; i--) {
    row.innerHTML += Input(gameRules.wordCount - i)
  }
})
}

export function mountKeyboard(keyboardElement) {
  keyboardElement.innerHTML = Keyboard()
}

export function changeRow() {
  const actualRow = document.getElementById('actual-row')
  const actualInputs = actualRow.querySelectorAll('input')
  const nextRow = document.querySelector('#actual-row ~ .board-row')
  const nextInputs = nextRow.querySelectorAll('input')

  actualInputs.forEach(input => {
    input.setAttribute('disabled', true)
  })

  if(nextRow) {
    actualRow.removeAttribute('id')
    nextRow.setAttribute('id', 'actual-row')
  }
}
