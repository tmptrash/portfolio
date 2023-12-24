import Shared from './shared'

import BackPath from '../img/back.png'
// hero
import IdleLeftPath from '../img/idle-left-6.png'
import IdleRightPath from '../img/idle-right-6.png'
import WalkLeftPath from '../img/walk-left-8.png'
import WalkRightPath from '../img/walk-right-8.png'
// sounds
import Music from '../sound/music.mp3'
import SoundSteps from '../sound/steps.mp3'

export const ASSET_NAMES = {
  'BackPath': BackPath,
  'IdleLeftPath': IdleLeftPath,
  'IdleRightPath': IdleRightPath,
  'WalkLeftPath': WalkLeftPath,
  'WalkRightPath': WalkRightPath,
  'Music': Music,
  'SoundSteps': SoundSteps
}

export const ASSETS = {}

export function preload(cb) {
  const onLoad = () => Shared.assets--
  for (let i in ASSET_NAMES) {
    const asset = ASSET_NAMES[i]
    if (asset.endsWith('.mp3')) {
      ASSETS[asset] = new Audio()
      ASSETS[asset].oncanplaythrough = onLoad
    } else if (asset.endsWith('.png')) {
      ASSETS[asset] = new Image()
      ASSETS[asset].onload = onLoad
    }
    Shared.assets++
    ASSETS[asset].src = asset
  }
  wait(cb)
}

function wait(cb) {
  if (Shared.assets > 0) {
    setTimeout(wait.bind(null, cb), 30)
    return
  }
  cb()
}