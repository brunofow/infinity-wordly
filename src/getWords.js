import { writeFile } from 'fs/promises'
import  wordsJson from '../words.json' assert { type: 'json' }

async function getWords() {
  const response = await fetch('https://raw.githubusercontent.com/fserb/pt-br/master/dicio')

  const data =  await response.text()

  const fetchedWordsArr = data.split('\n')

  const wordsArr = [...wordsJson.words]

  fetchedWordsArr.forEach(word => {
    if(word.trim().length === 5) {
      wordsArr.push(word)
    } 
  })
  
  await writeFile('words.json', JSON.stringify({
    words: wordsArr
  }))
}

getWords()
