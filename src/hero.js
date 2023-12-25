import Config from './config'
import Shared from './shared'
import { bind, unbind, LEFT, RIGHT, picked, fire, inWater } from './utils'
import { Sprite, draw as drawSprite, update as updateSprite, setImg } from './sprite'
import { play } from './sounds'

const HIT_DELAY = 150

export function Hero() {
  const hero = {
    t: 0,
    dir: RIGHT,
    pressed: { a: false, d: false, w: false, q: false },
    sprite: Sprite(...Config.hero),
    handlers: [],
    stepSound: Config.sounds.steps,
    stepSpeed: Config.stepSpeed,
    listeners: Array(1)
  }
  rebind(hero)
  hero.listeners[0] = [Shared.obs, 'rebind', rebind.bind(null, hero)]

  return hero
}

export function draw(h) {
  drawSprite(h.sprite)
}

export function update(h) {
  const t = performance.now()
  const s = h.sprite

  // walk: x += (t - h.t) * Config.stepSpeed * h.dir
  if (h.pressed.d || h.pressed.a) {
    updateX(h, s.x + (t - h.t) * h.stepSpeed * h.dir)
    h.stepSpeed = Config.stepSpeed
    s.img = s.imgs[`walk${side(h)}`]
    if (h.lendBefore) {
      h.stepSound.volume = Shared.volume
      play(h.stepSound)
    }
  }

  // idle
  !h.pressed.d && !h.pressed.a && !h.climb && (s.img = s.imgs[`idle${side(h)}`])

  updateScreen(h)
  updateSprite(s)
  h.t = t
}

function rebind(h) {
  unbind(h.handlers)
  h.pressed = { a: false, d: false, w: false }
  const keyCfg = { keydown: {}, keyup: {} }
  keyCfg.keydown[Config.leftKey]  = () => (h.pressed.a = true, h.dir = LEFT)
  keyCfg.keydown[Config.rightKey] = () => (h.pressed.d = true, h.dir = RIGHT)
  keyCfg.keyup[Config.leftKey]    = () => (h.pressed.a = false, h.pressed.d && (h.dir = RIGHT))
  keyCfg.keyup[Config.rightKey]   = () => (h.pressed.d = false, h.pressed.a && (h.dir = LEFT))
  h.handlers = bind(keyCfg)
}

function updateX(hero, newX) {
  const s = hero.sprite
  let diff = newX - s.x
  const left = diff < 0
  s.x += diff
  if (s.x < s.width) s.x = s.width
  // TODO: move it to config
  if (s.x > 1024) s.x = 1024
}

function updateScreen(h) {
  const s = h.sprite
  // TODO:
  if (s.x > Config.width) {
    // const r = room()
    // Shared.offsX += Config.width
    // s.x = -s.width / 2
    // updateObjs(r, room())
    // fire('change-room')
  } else if (s.x + s.width < 0) {
    // const r = room()
    // Shared.offsX -= Config.width
    // s.x = Config.width - s.width / 2
    // updateObjs(r, room())
    // fire('change-room')
  }
}

function side(hero) {
  return hero.dir === LEFT ? 'Left' : 'Right'
}