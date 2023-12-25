import Shared from './shared'
import Config from './config'
import { Hero, draw as drawHero, update as updateHero } from './hero'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { el, ons, findObjById, loadText, addObj, resize, show, hide, fullscreen } from './utils'
import { Sounds, play as playSound, stop as stopSound } from './sounds'
import { preload } from './assets'

export function Game() {
  const g = {
    pause: false,
    animateFn: null,
    listeners: Array(1),

    spinner: el(Config.spinnerQuery),
    srcBtn: el(Config.srcQuery),
    contentEl: el(Config.contentQuery)
  }
  const fn = animate.bind(null, g)
  g.animateFn = Config.useSetTimeout ? () => setTimeout(fn, Config.setTimeoutDelay) : () => requestAnimationFrame(fn)
  Shared.ctx = el(Config.canvasQuery).getContext('2d', { willReadFrequently: true, alpha: false })
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.imageSmoothingEnabled = false
  loadText()

  return g
}

export function start(g) {
  resize()
  show(g.spinner)
  g.listeners[2] = [window, 'resize', resize]
  preload(onAssets.bind(null, g))
}

export function play(g) {
  pause(g, false)
}

export function pause(g, p = true) {
  g.pause = p
  !p && animate(g)
}

function onAssets(g) {
  g.listeners[0] = [g.srcBtn, 'click', onSrc]
  ons(g.listeners)
  createObjs()
  hide([g.spinner])
  show([g.contentEl, g.srcBtn])
  playSound(Config.sounds.music)
  Config.fullscreen && fullscreen()
  play(g)
}

function onSrc() {
  location = Config.src
}

function createObjs() {
  Shared.sounds = Sounds()

  // Static items. Order is important!
  Shared.objs = []
  addObj({ draw: drawLevel, update: updateLevel, o: Level() })
  addObj({ draw: drawHero,  update: updateHero,  o: Hero(), id: Config.heroId })
  Shared.hero = findObjById(Config.heroId)
}

function animate(g) {
  if (g.pause) return
  draw()
  update()
  g.animateFn()
}

function draw() {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
  Shared.objs.forEach(o => o.draw(o.o))
}

function update() {
  !Shared.stop && Shared.objs.forEach(o => o.update(o.o))
}