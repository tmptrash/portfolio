import Config from './config'
import Shared from './shared'
import { el, on, bind, unbind, LEFT, RIGHT, fire, isMobile } from './utils'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'

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
    fire('step', (t - me.t) * me.stepSpeed * me.dir)
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
  if (isMobile()) {
    const canvas = el(Config.canvasQuery)
    on(canvas, 'touchstart', onTouchStart.bind(null, me))
    on(canvas, 'touchend', onTouchEnd.bind(null, me))
  } else {
    keyCfg.keydown[Config.leftKey]  = () => (me.pressed.a = true, me.dir = LEFT)
    keyCfg.keydown[Config.rightKey] = () => (me.pressed.d = true, me.dir = RIGHT)
    keyCfg.keyup[Config.leftKey]    = () => (me.pressed.a = false, me.pressed.d && (me.dir = RIGHT))
    keyCfg.keyup[Config.rightKey]   = () => (me.pressed.d = false, me.pressed.a && (me.dir = LEFT))
  }
  me.handlers = bind(keyCfg)
}

function onTouchStart(me, e) {
  const center = window.innerWidth / 2
  if (e.changedTouches[0].clientX < center) me.pressed.a = true, me.dir = LEFT
  else me.pressed.d = true, me.dir = RIGHT
  e.preventDefault()
}

function onTouchEnd(me, e) {
  const center = window.innerWidth / 2
  if (e.changedTouches[0].clientX < center) me.pressed.a = false, me.pressed.d && (me.dir = RIGHT)
  else me.pressed.d = false, me.pressed.a && (me.dir = LEFT)
}

function side(me) {
  return me.dir === LEFT ? 'Left' : 'Right'
}