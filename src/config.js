import { ASSET_NAMES as A } from './assets'

const WIDTH = 928
const HEIGHT = 793
let Config = null
let uniqueId = 0

export function id() {
  return ++uniqueId
}

export const Msgs = {
  loading: 'Loading. Please wait...',
  assetsLoaded: 'All assets were loaded...',
  hi: [
    'Hi there! My name is Dima & I am a software engineer.',
    'Specializes in WEB development - JS/TS, NG, React, ES6,',
    'Canvas 2D, Redux, Webpack, Jasmine, MUI and more. In',
    'a past I worked with C/C++, Julia, Rust & related envs.',
    'Active speaker in UI conferences, meetups, communities',
    'and YouTube channel. Passionate about Science, Algorithms,',
    'AI & ALife, WEB in general, Pure JS and browser games',
    '',
    'Use A, D buttons or just touch the screen on mobile device',
    'to see my portfolio...'
  ],
  p1: [
    'The  goal of the project was to create crypto currency portal',
    'similar to Binance, and mobile app for professional traders.',
    'What I did: Manage five dev teams & provide technical solutions;',
    'Configure users authentication; Code and Architecture review;',
    'Creation & support of branching strategy; Manual testing; Client',
    'negotiations; Coding; Project Processes development',
    '',
    'Stack    : git/Azure/JS/TS/React/Redux/Reselect/Formik/MUI/Auth0',
    'Position : Techical Leader',
    'Team size: 25'
  ],
  p2: [
    'The web portal of a large American company specializing in kidney',
    'diseases. The site was used by the company\'s doctors and patients',
    'for prescribing medications and making diagnoses. The project',
    'utilized a microservices architecture, various libraries, and',
    'numerous subprojects. What I did: Manage WEB dev team; Code review;',
    'Client negotiations; Code Optiomizations; Support of old code; Test',
    'coverage; Builds stability; Coding',
    '',
    'Stack    : NG13/bootstrap/calendar.io/primeng/scss/git/Jenkins/sonarcube',
    'Position : Technical Leader',
    'Team Size: 40'
  ],
  p3: [
    'An application for a healthcare company. The application worked',
    'with numerous types of fields, for which a custom parser and  a',
    'set of rules with complex checks were developed. What I did: App',
    'architecture; Coding; Other teams collaboration; Unit tests; App',
    'manual testing; Updating related tech docs; Client negotiations;',
    '',
    'Stack    : NG12/bootstrap/primeng/scss/git',
    'Position : Technical Leader',
    'Team Size: 4'
  ],
  p4: [
    'Retail UI Application provides users with an interface to customized',
    'capabilities, including view, query, and update of the Master Data',
    'Center. The interface  provides different role - based access to the',
    'users acting in Vendor, Super User or Employee roles, and/or in',
    'combinations of these roles or sub-roles. Omni Retail application\’s',
    'User Interface designed to support concurrent editing of multiple',
    'document sections of multiple documents by many teams. What I did:',
    'Created JS OOP opensource library; Full project delivery from zero to',
    'production; Unit tests coverage; Managed 12 WEB developers; Created &',
    'supported apps architecture; Project process; Code optimizations;',
    '',
    'Stack    : NG.JS/jQuery/_/HTML5/Bootstrap/REST/Ajax/SVN/Jasmine/N13',
    'Position : Technical Leader',
    'Team Size: 4 - 12'
  ],
  p5: [
    'Providing new application-level security functionality combined',
    'with  user awareness and inbound/outbound content inspection',
    'capabilities, our scalable NGIPS dynamically protects your',
    'applications, network, and data from new and advanced threats.',
    'What I did: Coding; Code review; Unit tests; Components creation;',
    'Project stability support;',
    '',
    'Stack    : JS/svn/YUICompressor/Jasmine/phantomJS/Cocumber',
    'Position : Senior developer',
    'Team Size: 15'
  ],
  p6: [
    'WEB portal for high schools in USA. Prevents drop out of students in',
    'schools. We used self made JS framework at that time & flex for charts.',
    'What I did: App architecture; Coding; Code review; Unit tests;',
    '',
    'Stack    : ExtJS3/Jasmine/Flex',
    'Position : Mid developer',
    'Team Size: 12'
  ],
  p7: [
    'Embark on an epic journey through a mysterious underground cave as the',
    'daring, red-haired heroine. Your mission is to uncover the secrets of',
    'the labyrinth and unlock the hidden door using a mysterious key. But',
    'beware, danger lurks at every turn. The cave is filled with venomous',
    'insects, deadly predators, and other fiendish foes. What I did: Full',
    'cycle development and delivery; Level design; Animation; Sounds & Music;',
    'Scenario; Pixel Art;',
    '',
    'Stack    : Pure JS/CSS/Webpack',
    'Position : Core developer',
    'Team Size: 1'
  ],
  p8: [
    'This is optimized 2D ecosystem with ability to run up to 10 000 agents',
    '(organisms) and 100 000 molecules (matter and organism\'s food) in parallel.',
    'It uses linear assembler-like language (LGP) as a DNA, which runs under self-',
    'made VM. The purpose is to produce complex behavior of organisms based on',
    'generated code. Such code is used as organism\'s "brain" and manages all his',
    'life aspects. What I did: Language design; VM & debugger development; Unit',
    'tests; Statistics & charts components development;',
    '',
    'Stack    : Pure JS/CSS/Canvas 2D/Webpack',
    'Position : Core developer',
    'Team Size: 3'
  ],
  p9: [
    'Fast implementation of simplex noise algorithm using ES6. Based on the',
    'source of Jonas Wagner. Added octaves, amplitude, scale, and distribution.',
    'What I did: Coding',
    '',
    'Stack    : Pure JS/Canvas 2D',
    'Position : Core developer',
    'Team Size: 1'
  ],
  p10: [
    'Really cute JavaScript OOP library - N13. I was inspired by ExtJS OOP way',
    'and decided to write my own Open Source library for classes in JavaScript.',
    'What I did: mixin classes with inheritance; static properties and methods',
    'string namespaces; classic inheritance; class configuration; constructor',
    'method (init()); super method calls (see callParent() method); mixin methods',
    'calls (multiple inheritance); dependencies loading (RequireJS analog); other',
    'libraries compatibility (BackboneJS, Angular, any...); simple utils',
    '',
    'Stack    : Pure JS',
    'Position : Core developer',
    'Team Size: 1'
  ],
  p11: [
    'AntiVirus software for street terminals under Windows 2000. Project used a',
    'white list approach to check if current process has an ability to run on',
    'current device. What I did: using C++/C#/CPP/CLI I implemented low level',
    'mechanism of controlling Windows processes.',
    '',
    'Stack    : C++/C#/CPP/CLI/.NET/svn/MSDN',
    'Position : Developer',
    'Team Size: 7'
  ],
  p12: [
    'Creation of HEX-like low level language & it\'s interpreter for programming',
    'credit cards in banks and gas stations of post USSR countries. What I did:',
    'Interpreter implementation; Support of different card types; Support of magnet',
    'line & chips; Developing related software',
    '',
    'Stack    : C++/perl/svn/MSDN/Win32 API/POS terminal software',
    'Position : Developer',
    'Team Size: 15'
  ],
  p13: [
    'Camel Disc Catalog is a nice CD catalog software that generates a computer',
    'database to keep track and find any disk in a snap. The program will automatically',
    'index the structure of files and folders, record file names and create a disk',
    'snapshot. What I did: Implementation of core functions: scanning, database saving,',
    'app UI; Creation of project size with self made forum;',
    '',
    'Stack    : C++/svn/PHP/JavaScript/wxWidgets',
    'Position : Developer',
    'Team Size: 3'
  ],
  p14: [
    'Fast and good looking Open Source html viewer for DOS. What I did: Implementation',
    'of these features: Simple HTML preview in text mode; 80 Hz custom monitor rate;',
    'HTML source viewer; Embedded font editor; Really tiny size (less then 50Kb)',
    '',
    'Stack    : C++/asm',
    'Position : Developer',
    'Team Size: 2'
  ],
  end1: ['', '', '', '', 'You don\'t need to go so deep', '', '', ''],
  end2: ['', '', '', '', 'There is nothing here...', '', '', ''],
  end3: ['', '', '', '', 'Is your finger not tired?', '', '', '']
}

export default Config = {
  // html & css & ids
  ver: 'v0.1',
  src: 'https://github.com/tmptrash/portfolio',
  linkedin: 'https://www.linkedin.com/in/flatline-jack',
  canvasQuery: '#canvas',
  meId: 'me',
  srcQuery: 'a.src',
  linkedinQuery: 'a.linkedin',
  runQuery: '.run',
  contentQuery: '.content',
  linksDiv: 'div.pages',
  fullscreenQuery: '#fullscreen',
  frontColor: '#fff',
  footerColor: '#cca',
  grayColor: '#ccc',
  textFont: '18px Ubuntu Mono, monospace',
  prjColor: '#113333',

  // game related
  fullscreen: true,
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
  photo: [{ x: 30, y: 100 }, A.PhotoPath],
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