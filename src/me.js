import Config from './config'
import Shared from './shared'
import { bind, unbind, LEFT, RIGHT, fire } from './utils'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { play } from './sounds'

export function Me() {
  const me = {
    t: 0,
    dir: RIGHT,
    pressed: { a: false, d: false, w: false, q: false },
    sprite: Sprite(...Config.me),
    handlers: [],
    stepSpeed: Config.stepSpeed,
    listeners: Array(1)
  }
  rebind(me)
  me.listeners[0] = [Shared.obs, 'rebind', rebind.bind(null, me)]

  return me
}

export function draw(me) {
  drawSprite(me.sprite)
}

export function update(me) {
  const t = performance.now()
  const s = me.sprite

  // walk: x += (t - h.t) * Config.stepSpeed * h.dir
  if (me.pressed.d || me.pressed.a) {
    fire('offs', (t - me.t) * me.stepSpeed * me.dir)
    me.stepSpeed = Config.stepSpeed
    s.img = s.imgs[`walk${side(me)}`]
  }

  // idle
  !me.pressed.d && !me.pressed.a && !me.climb && (s.img = s.imgs.idleRight)

  updateSprite(s)
  me.t = t
}

function rebind(me) {
  unbind(me.handlers)
  me.pressed = { a: false, d: false, w: false }
  const keyCfg = { keydown: {}, keyup: {} }
  keyCfg.keydown[Config.leftKey]  = () => (me.pressed.a = true, me.dir = LEFT)
  keyCfg.keydown[Config.rightKey] = () => (me.pressed.d = true, me.dir = RIGHT)
  keyCfg.keyup[Config.leftKey]    = () => (me.pressed.a = false, me.pressed.d && (me.dir = RIGHT))
  keyCfg.keyup[Config.rightKey]   = () => (me.pressed.d = false, me.pressed.a && (me.dir = LEFT))
  me.handlers = bind(keyCfg)
}

function side(me) {
  return me.dir === LEFT ? 'Left' : 'Right'
}