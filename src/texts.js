import Config from './config'
import Shared from './shared'
import { text, msg } from './utils'

export function Texts() {
  const w = Config.width
  return {
    texts: [
      ['hi', '[ About ]', 0, 900, 350],
      ['p1', '[ US Crypto Exchange platform ]', 120, 1750, w],
      ['p2', '[ Retail WEB Application ]', 900, 2500, w],
    ]
  }
}

export function draw(t) {
  const offs = Shared.offsX
  const texts = t.texts
  const l = texts.length
  
  for (let i = 0; i < l; i++) {
    const line = texts[i]
    if (offs >= line[2] && offs <= line[3]) {
      text(msg(line[0]), line[4] + line[2] - offs, 250)
      text(line[1], line[4] + line[2] - offs, 160, Config.textFont, '#113333')
    }
  }

  text(offs.toFixed(2), 140, 40)
}

export function update() {}