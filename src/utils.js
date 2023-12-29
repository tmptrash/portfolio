import Config, { Msgs } from './config'
import Shared from './shared'

// TODO: review all funcs
export const RIGHT =  1
export const LEFT  = -1
export const UP    = -1
export const DOWN  = 1

export function isArr(v) {
  return Array.isArray(v)
}

export function int(n) {
  const i = Math.trunc(n)
  return (n - i < .502) ? i : i + 1
}

export function bind(handlers) {
  const ret = {}
  for (const evt in handlers) {
    ret[evt] = e => handlers[evt] && handlers[evt][e.code] && handlers[evt][e.code]()
    on(window, evt, ret[evt])
  }
  return ret
}

export function unbind(handlers) {
  for (const evt in handlers) {
    off(window, evt, handlers[evt])
  }
}

export function on(el, event, handler) {
  el.addEventListener(event, handler)
}

export function ons(listeners) {
  listeners && listeners.forEach(l => on(l[0], l[1], l[2]))
}

export function off(el, event, handler) {
  el.removeEventListener(event, handler)
}

export function offs(listeners) {
  listeners && listeners.forEach(l => off(l[0], l[1], l[2]))
}

export function fire(e, params = null) {
  Shared.obs.dispatchEvent(new CustomEvent(e, {detail: params}))
}

export function fullscreen() {
  try {
    if (Config.fullscreen) document.documentElement.requestFullscreen()
    else if (document.fullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen()
      else if (document.fullscreenElement.exitFullscreen) document.fullscreenElement.exitFullscreen()
    }
  } catch {}
}

export function mousePos(canvas, { clientX, clientY }) {
  const rect = canvas.getBoundingClientRect()
  return {
    x: Math.ceil(clientX / document.body.style.zoom - rect.x),
    y: Math.ceil(clientY / document.body.style.zoom - rect.y)
  }
}

export function findObjById(id) {
  const obj = Shared.objs.find(o => o.id === id)
  return obj ? obj.o : null
}

export function findObjByFn(drawFn) {
  const obj = Shared.objs.find(o => o.draw === drawFn)
  return obj ? obj.o : null
}

export function addObj(cfg, pos) {
  if (cfg.o) {
    const objs = Shared.objs
    if (!pos || pos === 'end') objs.push(cfg), addListeners(cfg.o)
    else if (typeof pos === 'number') objs.splice(pos, 0, cfg), addListeners(cfg.o)
    else if (typeof pos === 'string') addAfter(pos, cfg), addListeners(cfg.o)
  }
}

export function delObj(obj) {
  const idx = findObjIdx(obj)
  if (idx !== -1) {
    const o = Shared.objs[idx].o
    o.kill ? o.kill() : offs(o.listeners)
    Shared.objs.splice(idx, 1)
  }
}

export function findObjIdx(obj) {
  return Shared.objs.findIndex(o => o.o === obj)
}

export function findObjIdxById(id) {
  return Shared.objs.findIndex(o => o.id === id)
}

export function fn() {}

export function touch(s, s1, offs = 0) {
  return (
    s.x + offs <= (s1.x + s1.width - offs)  &&
    (s.x + s.width - offs) >= s1.x + offs   &&
    s.y + offs <= (s1.y + s1.height - offs) &&
    (s.y + s.height - offs) >= s1.y + offs
  )
}

export function msg(msgId) {
  const m = Msgs[msgId]
  if (m) {
    return typeof m === 'function' ? m() : m
  }

  return ''
}

export function repeat(timeout, every, timeoutCb, everyCb) {
  const int = setInterval(everyCb, every)
  setTimeout(() => {
    clearInterval(int)
    timeoutCb()
  }, timeout)
  return int
}

export function show(e) {
  if (isArr(e)) { e.forEach(el => show(el)); return null }
  const elem = typeof e === 'string' ? el(e) : e
  elem.style.display = ''
  return elem
}

export function hide(e) {
  if (isArr(e)) { e.forEach(el => hide(el)); return null }
  const elem = typeof e === 'string' ? el(e) : e
  elem.style.display = 'none'
  return elem
}

export function el(query) {
  return document.querySelector(query)
}

export function css(e, attr, v) {
  if (typeof e === 'string') el(e).style[attr] = v
  else e.style[attr] = v
}

export function text(t, x, y, font = Config.textFont, style = Config.frontColor, cb) {
  if (Array.isArray(t)) {
    t.forEach((s, i) => cb ? cb(s, x, y + i * 30, i, font, style) : txt(s, x, y + i * 30, font, style))
    return
  }
  txt(t.toString(), x, y, font, style)
}

export function loadText() {
  clear()
  Shared.ctx.font = Config.textFont
  Shared.ctx.fillText(Msgs.loading, Config.width / 2 - 105, Config.height / 2)
}

export function resize() {
  css(document.body, 'zoom', window.innerHeight * .9 / Config.height)
}

export function arr(size, v) {
  const a = Array(size)
  const fn = typeof v === 'function' ? v : () => v
  for (let i = 0; i < size; i++) a[i] = fn()
  return a
}

export function addAfter(id, obj) {
  const idx = findObjIdxById(id)
  if (idx !== -1) Shared.objs.splice(idx + 1, 0, obj)
  else Shared.objs.push(obj)
}

export function clear() {
  Shared.ctx.clearRect(0, 0, Config.width, Config.height)
}

function addListeners(d) {
  d.listeners && ons(d.listeners)
}

// TODO: use it
function isChrome() {
  return /Chrome/.test(navigator.userAgent)
}

function txt(t, x, y, font, style) {
  Shared.ctx.fillStyle = style
  Shared.ctx.font = font
  Shared.ctx.fillText(t, x, y)
}