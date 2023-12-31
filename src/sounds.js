import Config from './config'
import { ASSETS } from './assets'

export function Sounds() {
  const sounds = Config.sounds

  for (let s in sounds) {
    if (ASSETS[sounds[s]]) {
      sounds[s] = ASSETS[sounds[s]]
    } else throw Error(`Sound not found: ${s}`)
  }

  return sounds
}

export function play(a, loop = false) {
  loop && (a.loop = loop)
  a.play()
}

export function stop(a) {
  a.pause()
}