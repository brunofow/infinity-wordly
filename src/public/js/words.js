
const words = []
let correctWord = ''

async function fetchWords() {
  const response = await fetch('/words')
  const data = await response.json()

  words.push(...data.words)

  correctWord = words[Math.floor(Math.random() * words.length)]
}

export { fetchWords, words, correctWord}
