import { checkAnswer } from "./checkAnswer.js"

export function boardMotion(gameInputs) {
  
  gameInputs.forEach((input) =>
    input.addEventListener("input", (e) => {
      if (e.inputType === "deleteContentBackward") {
        e.preventDefault()
        return
      }
      const inputId = getInputIdNumber(e.target.id)
      if (e.key === "Backspace") {
        previousInput(inputId).focus()
        e.target.value = ""
        return
      }

      e.target.value = e.target.value.replace(/[^A-Za-z]/g, "")

      if (inputId === gameInputs.length - 1) {
        return
      }

      if (e.target.value === "") {
        return
      }

      nextInput(inputId).focus()
    }),
  )

  gameInputs.forEach((input) =>
    input.addEventListener("keydown", (e) => {
      const inputId = getInputIdNumber(e.target.id)
      if (e.target.value === "") {
        if (e.key === "Backspace" && inputId > 0) {
          previousInput(inputId).focus()
        }
      }

      if (e.key === "Backspace") {
        e.target.value = ""
      }

      if (e.key === "ArrowLeft" && inputId > 0) {
        previousInput(inputId).focus()
      }

      if (e.key === "ArrowRight" && inputId < gameInputs.length - 1) {
        nextInput(inputId).focus()
      }

      if (e.key === "Enter") {
        const filteredValues = Array.from(gameInputs).filter((input) => input.value !== "")
        if (filteredValues.length !== gameInputs.length) {
          return
        }
        checkAnswer(gameInputs)
      }
    }),
  )
}

const getInputIdNumber = (id) => Number(id.split("-")[2])

const previousInput = (actualIdNumber) => document.querySelector(`#actual-row > #game-input-${actualIdNumber - 1}`)
const nextInput = (actualIdNumber) => document.querySelector(`#actual-row > #game-input-${actualIdNumber + 1}`)
