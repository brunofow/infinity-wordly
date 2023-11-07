import { changeRow } from './boardUtils.js'
import { words, correctWord } from '../words.js'

export function checkAnswer(gameInputs) {
  const answerLetters = getActualWord(gameInputs)
  
  if(!words.includes(answerLetters.join(''))) {
    alert('Palavra inválida')
    return
  }

  let actualCorrectWord = correctWord

  const checkedLetters = answerLetters.map((letter, index) => {
    if (letter === actualCorrectWord[index]) {
      actualCorrectWord = actualCorrectWord.replace(letter, "_")
      return "correct"
    } else if (actualCorrectWord.includes(letter)) {
      actualCorrectWord = actualCorrectWord.replace(letter, "_")
      return "present"
    }
    banLetter(letter)
    return "absent"
  })

  checkedLetters.forEach((status, index) => {
    paintLetter(gameInputs[index], status, index)
  })

  if (actualCorrectWord === "_____") {
    finishGameSucess()    
    return
  }
  
  changeRow()
}

const getActualWord = (actualInputs) => {
  const inputs = Array.from(actualInputs)

  return inputs.map((input) => {
    return input.value
  })
}

const banLetter = (letter) => {
}

/**
 * @param {HTMLInputElement} input
 * @param {string} status
 */
const paintLetter = (input, status, index) => {
  setTimeout(() => {
    input.classList.add(status)
  }, index * 500)
}

const finishGameSucess = () => {
}
