import 'symbolScreen/screen.css'
import { vScreen, VScreen } from 'vScreen'

// This is needed to have correct aspect ratio while rendering stuff
// It will be utilized by camera.ts
window['aspectRatioMultiplier'] = 0.534787656584174

const target = document.createElement('div')

target.className = 'charContainer'

document.body.appendChild(target)

const symbolsByDarkness = ' .:-=+*#%@'
const getSymbol = (value: number): string => { // 0 - 255
  if (value === 0) return symbolsByDarkness[1]
  const idx = Math.round((value / 255) * symbolsByDarkness.length - 1)
  return symbolsByDarkness[idx]
}

export const drawScreen = (vscreen: VScreen): void => {
  let result = ''
  for (let i = 0; i < vscreen.height; i++) {
    let row = ''
    for (let j = 0; j < vscreen.width; j++) {
      const value = vscreen.data[i][j] // 0 - 255
      row += getSymbol(Math.floor((value.r + value.g + value.b) / 3))
    }
    result += row + '\n'
  }
  target.innerHTML = result
}