

export function keyboardUse() {
  const keyboard = document.getElementById('keyboard')
  
  keyboard.addEventListener('click', (e) => {
    console.log(e.target)
  })
}
