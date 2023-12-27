import Shared from './shared'
import Config from './config'
import { Level, draw as drawLevel, update as updateLevel } from './level'
import { Me, draw as drawMe, update as updateMe } from './me'
import { Texts, draw as drawTexts } from './texts'
import { Fps, draw as drawFps } from './fps'
import { el, ons, findObjById, loadText, addObj, resize, show, hide, fullscreen, clear } from './utils'
import { Sounds, play as playSound } from './sounds'
import { preload } from './assets'

export function Game() {
  const g = {
    pause: false,
    animateFn: null,
    listeners: Array(3),

    srcBtn: el(Config.srcQuery),
    runBtn: el(Config.runQuery),
    contentEl: el(Config.contentQuery),
    canvas: el(Config.canvasQuery),
    pages: el(Config.linksDiv),
  }
  const fn = animate.bind(null, g)
  g.animateFn = Config.useSetTimeout ? () => setTimeout(fn, Config.setTimeoutDelay) : () => requestAnimationFrame(fn)
  Shared.ctx = el(Config.canvasQuery).getContext('2d', { willReadFrequently: true, alpha: false })
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.textFont
  Shared.ctx.imageSmoothingEnabled = false
  loadText()

  return g
}

export function run(g) {
  resize()
  preload(onPreload.bind(null, g))
}

export function play(g, p = true) {
  g.pause = !p
  p && animate(g)
}

function onSrc() {
  location = Config.src
}

function onPreload(g) {
  g.listeners[0] = [window, 'resize', resize]
  g.listeners[1] = [g.srcBtn, 'click', onSrc]
  g.listeners[2] = [g.runBtn, 'click', onPlay.bind(null, g)]
  ons(g.listeners)
  clear()
  show(g.runBtn)
  hide([g.canvas, g.pages])
}

function onPlay(g) {
  createObjs()
  hide(g.runBtn)
  show([g.srcBtn, g.canvas, g.pages])
  playSound(Config.sounds.forest)
  Config.fullscreen && fullscreen()
  play(g)
}

function createObjs() {
  Shared.sounds = Sounds()

  // Static items. Order is important!
  Shared.objs = []
  addObj({ draw: drawLevel,  update: updateLevel, o: Level() })
  addObj({ draw: drawMe,     update: updateMe,    o: Me(), id: Config.meId })
  addObj({ draw: drawTexts,  update: ()=>{},      o: Texts() })
  addObj({ draw: drawFps,    update: ()=>{},      o: Fps() })
  Shared.me = findObjById(Config.meId)
}

function animate(g) {
  if (g.pause) return
  draw()
  update()
  g.animateFn()
}

function draw() {
  clear()
  Shared.objs.forEach(o => o.draw(o.o))
}

function update() {
  !Shared.stop && Shared.objs.forEach(o => o.update(o.o))
}