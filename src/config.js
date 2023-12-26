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
  hi: [
    'Hi there!  My name is Dima & I am a software developer.',
    'Specializes in WEB development - JS/TS, NG, React, ES6,',
    'Canvas 2D,  Redux,  Webpack, Jasmine, MUI and more.  In',
    'a past I worked with  C++, Julia, Rust &  related envs.',
    'Active speaker in UI conferences,  meetups, communities',
    'and  YouTube  presentations.  Passionate about Science,',
    'Algorithms,  AI, Front-end in general and browser games',
    '',
    'Use A,D keys to see my portfolio...'
  ],
  p1: [
    'The goal of the project was to create crypto currency portal',
    'similar to Binance, and mobile app on React/React Native for',
    'professional traders.',
    '',
    'Stack    : git/Azure/JS/TS/React/Redux/Reselect/Formik/MUI/Auth0',
    'Position : Techical Leader',
    'Team size: 25'
  ],
  p2: [
    'Retail UI Application provides users with an interface to customized',
    'capabilities,  including view, query,  and update of the Master Data',
    'Center. The interface  provides different role - based access to the',
    'users  acting  in Vendor,  Super User  or Employee  roles, and/or in',
    'combinations of these roles or sub-roles.  Omni Retail application\’s',
    'User  Interface designed to  support concurrent  editing of multiple',
    'document sections of multiple documents by multiple teams.',
    '',
    'Stack    : NG.JS/jQuery/_/HTML5/Bootstrap/REST/Ajax/SVN/Jasmine/N13',
    'Position : Technical Leader',
    'Team Size: 4 - 12'
  ]
}

export default Config = {
  // html & css & ids
  ver: 'v0.1',
  src: 'https://github.com/tmptrash/portfolio',
  canvasQuery: '#canvas',
  meId: 'me',
  srcQuery: '.src',
  runQuery: '.run',
  contentQuery: '.content',
  spinnerQuery: '.spin',
  fullscreenQuery: '#fullscreen',
  frontColor: '#fff',
  textFont: '18px Ubuntu Mono, monospace',

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
  fpsPos: [30, 40],

  // me related
  stepSpeed: .15,

  // keys
  leftQuery: '#left',
  rightQuery: '#right',
  // keys: tinyurl.com/5n8deccv
  leftKey: 'KeyA',
  rightKey: 'KeyD',

  // audio
  sounds: {
    forest: A.SoundForest
  },

  // sprites
  me: [{ x: 128, y: 645 }, {
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