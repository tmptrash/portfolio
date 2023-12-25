import Shared from './shared'
import Config from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'

export function Level() {
  return {
    sprite: Sprite(...Config.back)
  }
}

export function draw(level) {
  drawSprite(level.sprite, Shared.offsX, Shared.offsY)
}

export function update(level) {
  updateSprite(level.sprite)
}