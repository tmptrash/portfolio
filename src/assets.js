import Shared from './shared'

import L0Path from '../img/l-0.png'
import L1Path from '../img/l-1.png'
import L2Path from '../img/l-2.png'
import L3Path from '../img/l-3.png'
import L4Path from '../img/l-4.png'
import L5Path from '../img/l-5.png'
import L6Path from '../img/l-6.png'
import L7Path from '../img/l-7.png'
import L8Path from '../img/l-8.png'
import L9Path from '../img/l-9.png'
import L10Path from '../img/l-10.png'
import L11Path from '../img/l-11.png'
// me
import PhotoPath from '../img/me.png'
import IdleRightPath from '../img/idle-right-6.png'
import WalkLeftPath from '../img/walk-left-8.png'
import WalkRightPath from '../img/walk-right-8.png'
// sounds
import SoundForest from '../sound/forest.mp3'

export const ASSET_NAMES = {
  'L0Path': L0Path,
  'L1Path': L1Path,
  'L2Path': L2Path,
  'L3Path': L3Path,
  'L4Path': L4Path,
  'L5Path': L5Path,
  'L6Path': L6Path,
  'L7Path': L7Path,
  'L8Path': L8Path,
  'L9Path': L9Path,
  'L10Path': L10Path,
  'L11Path': L11Path,
  'PhotoPath': PhotoPath,
  'IdleRightPath': IdleRightPath,
  'WalkLeftPath': WalkLeftPath,
  'WalkRightPath': WalkRightPath,
  'SoundForest': SoundForest
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