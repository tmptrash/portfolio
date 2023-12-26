import Shared from './shared'
import Config from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { arr } from './utils'

export function Level() {
  const l = {
    sprites: Config.back.map(s => Sprite(...s)),
    offsX: arr(Config.back.length, 0),
    pages: arr(Config.back.length, 0),
    listeners: Array(1)
  }
  l.listeners[0] = [Shared.obs, 'offs', onOffs.bind(null, l)]

  return l
}

export function draw(l) {
  l.sprites.forEach((s, i) => drawSprite(s, l.offsX[i], Shared.offsY))
}

export function update(l) {
  const w = Config.width
  l.sprites.forEach((s, i) => {
    if (l.offsX[i] < 0) l.pages[i] ? (l.pages[i]--, l.offsX[i] = w * 2 - 1) : l.offsX[i] = 0
    if (l.offsX[i] + w > Config.backWidth) l.offsX[i] = 0, l.pages[i]++
    updateSprite(s)
  })
}

function onOffs(l, param) {
  const amount = l.offsX.length
  for (let i = 0; i < amount; i++) l.offsX[i] += (param.detail * (i + 1) / amount)
}