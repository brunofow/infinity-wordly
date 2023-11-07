import { fetchWords } from './words.js'
import {mountBoard, mountKeyboard} from './utils/boardUtils.js'
import {boardMotion} from './utils/boardMotion.js'
import { keyboardUse } from './utils/keyboardUse.js'

fetchWords()
const boardRows = document.querySelectorAll('.board-row')
const keyboard = document.getElementById('keyboard')

mountBoard(boardRows)
mountKeyboard(keyboard)
keyboardUse()

const actualRowInputs = document.querySelectorAll('#actual-row > input')

actualRowInputs.forEach(input => {
  input.removeAttribute('disabled') 
})

boardMotion(actualRowInputs)

const rowObserver = new MutationObserver((mutations) => {
    if(mutations[0].type === 'attributes') {
      let actualRowInputs = document.querySelectorAll('#actual-row > input')
      actualRowInputs.forEach(input => {
        input.removeAttribute('disabled')
      })
      boardMotion(actualRowInputs)
    }
})

boardRows.forEach(row => {
  rowObserver.observe(row, {
    attributes: true
  })
})
