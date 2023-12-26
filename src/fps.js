import Shared from './shared'
import Config from './config'
import { text } from './utils'

export function Fps() {
  return {
    fTime: performance.now(),
    curFps: 0
  }
}

export function draw(fps) {
  const t = performance.now()
  if (t - fps.fTime > 1000) {
    Shared.fps = fps.curFps.toFixed()
    fps.curFps = 0
    fps.fTime = t
  }
  fps.curFps++

  text(`fps: ${Shared.fps}`, ...Config.fpsPos)
}