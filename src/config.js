import { ASSET_NAMES as A } from './assets'

const WIDTH = 928
const HEIGHT = 793
let Config = null
let uniqueId = 0

export function id() {
  return ++uniqueId
}

export const Msgs = {
  welcome: 'Welcome to my portfolio',
  keys: () => `left - ${fmt(Config.leftKey)}`,
  loading: 'Loading. Please wait...',
}

export default Config = {
  // html & css & ids
  ver: 'v0.1',
  src: 'https://github.com/tmptrash/portfolio',
  canvasQuery: '#canvas',
  heroId: 'hero',
  srcQuery: '.src',
  runQuery: '.run',
  contentQuery: '.content',
  spinnerQuery: '.spin',
  fullscreenQuery: '#fullscreen',
  frontColor: '#ccc',
  textColor: '#fff',
  textFont: '20px Cambria, serif',
  frontFont: '16px Cambria, serif',

  // game related
  fullscreen: false,
  useSetTimeout: false,
  setTimeoutDelay: 7,
  width: WIDTH,
  height: HEIGHT,
  backWidth: 2784,
  objTickMs: 30,
  intersectionOffs: 5,
  textDist: 5,
  textSpeed: .009,
  scriptsPos: 3,

  // hero related
  stepSpeed: .15,

  // keys
  leftQuery: '#left',
  rightQuery: '#right',
  // keys: tinyurl.com/5n8deccv
  leftKey: 'KeyA',
  rightKey: 'KeyD',

  // audio
  sounds: {
    music: A.Music,
    steps: A.SoundSteps
  },

  // sprites
  hero: [{ x: 128, y: 645 }, {
    idleRight: [A.IdleRightPath, 6, 260],
    walkLeft: [A.WalkLeftPath, 8, 60],
    walkRight: [A.WalkRightPath, 8, 60]
  }],
  back: [
    [{ x: 0, y: 0 }, A.L11Path],
    [{ x: 0, y: 0 }, A.L10Path],
    [{ x: 0, y: 0 }, A.L9Path],
    [{ x: 0, y: 0 }, A.L8Path],
    [{ x: 0, y: 0 }, A.L7Path],
    [{ x: 0, y: 0 }, A.L6Path],
    [{ x: 0, y: 0 }, A.L5Path],
    [{ x: 0, y: 0 }, A.L4Path],
    [{ x: 0, y: 0 }, A.L3Path],
    [{ x: 0, y: 0 }, A.L2Path],
    [{ x: 0, y: 0 }, A.L1Path],
    [{ x: 0, y: 0 }, A.L0Path]
  ]
}

// TODO:
function fmt(msg) {
  if (msg.startsWith('Key')) return msg.substring(3)
  return msg
}