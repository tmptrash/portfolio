import { ASSET_NAMES as A } from './assets'

const WIDTH = 1024
const HEIGHT = 800
const EFFECT_ID = 'effectsId'
let Config = null
let uniqueId = 0

export function id() {
  return ++uniqueId
}

export const Msgs = {
  welcome: 'Welcome to my portfolio',
  keys: () => `left - ${fmt(Config.leftKey)}`
}

export default Config = {
  // html & css & ids
  ver: 'v0.1',
  src: 'https://github.com/tmptrash/portfolio',
  canvasQuery: '#canvas',
  audioId: 'audio',
  heroId: 'hero',
  beforeEffectsId: 'beforeEffects',
  effectsId: EFFECT_ID,
  helpQuery: 'button.help',
  srcQuery: '.src',
  contentQuery: '.content',
  spinnerQuery: '.spin',
  volumeQuery: 'input[type=range]',
  volumeLabelQuery: '.vol',
  fullscreenQuery: '#fullscreen',
  frontColor: '#ccc',
  verColor: '#000',
  textColor: '#fff',
  waterColor: '#3fabcc',
  textFont: '20px Cambria, serif',
  frontFont: '16px Cambria, serif',

  // game related
  fullscreen: false,
  useSetTimeout: false,
  setTimeoutDelay: 7,
  replayPeriod: 2000,
  fpsPos: [WIDTH / 2 - 100, 20],
  logoPos: [256, 50],
  musicVolume: .6,
  width: WIDTH,
  height: HEIGHT,
  spriteSize: 32,
  hSprites: 256,
  vSprites: 125,
  objTickMs: 30,
  intersectionOffs: 5,
  textDist: 5,
  textSpeed: .009,
  scriptsPos: 3,

  // hero related
  stepSpeed: .31,

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
  fireflySmall: [{ x: 0, y: 0 }, { idle: [A.FireflySPath, 4, 300] }],
  fireflyMid: [{ x: 0, y: 0 }, { idle: [A.FireflyMPath, 4, 300] }],
  fireflyBig: [{ x: 0, y: 0 }, { idle: [A.FireflyBPath, 5, 250] }],
  hero: [{ x: 230, y: 0 }, {
    idleLeft: [A.IdleLeftPath, 3, 260],
    idleRight: [A.IdleRightPath, 3, 260],
    walkLeft: [A.WalkLeftPath, 6, 60],
    walkRight: [A.WalkRightPath, 6, 60]
  }],
  back: [{ x: 0, y: 0, width: WIDTH, height: HEIGHT }, A.BackPath]
}

// TODO:
function fmt(msg) {
  if (msg.startsWith('Key')) return msg.substring(3)
  return msg
}