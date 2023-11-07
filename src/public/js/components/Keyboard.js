const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "backspace"],
  ["z", "x", "c", "v", "b", "n", "m", "enter"],
]

export function Keyboard() {
  return keys.map((row, index) => {
    return `<div id="keyboard-row-${index}" class="keyboard-row">
      ${row.map((key) => {
        return `<button class="keyboard-key" id="${key}">${key}</button>`
      }).join('')}
      </div>`
  }).join('')
}
