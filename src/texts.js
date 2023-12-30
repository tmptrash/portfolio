import Config from './config'
import Shared from './shared'
import { text, msg, on, el, fire } from './utils'
import { Sprite, draw as drawSprite } from './sprite'

const VIEW_OFFS = 765

export function Texts() {
  const w = Config.width
  const t = {
    texts: [
      ['hi', '[ About ]', 0, 900, 350],
      ['p1', '[ Crypto Exchange platform in the USA ]', 120, 1750, w],
      ['p2', '[ Retail WEB Application ]', 900, 2500, w],
      ['p3', '[ Healthcare portal ]', 1750, 3520, w],
      ['p4', '[ Healthcare WEB app ]', 2565, 4105, w],
      ['p5', '[ Internet security WEB app ]', 3355, 4855, w],
      ['p6', '[ High school students WEB app ]', 4155, 5855, w],
    ],
    photo: Sprite(...Config.photo)
  }
  on(el(Config.linksDiv), 'click', onProject.bind(null, t))

  return t
}

export function draw(t) {
  const offs = Shared.offsX
  const texts = t.texts
  const l = texts.length
  const font = Config.textFont
  const col = Config.prjColor
  const ftCol = Config.footerColor

  for (let i = 0; i < l; i++) {
    const line = texts[i]
    if (offs >= line[2] && offs <= line[3]) {
      text(line[1], line[4] + line[2] - offs, 160, font, col)
      text(msg(line[0]), line[4] + line[2] - offs, 250, font, col, (s, x, y, idx) => {
        const len = msg(line[0]).length
        text(s, x, y, font, (i && len - idx < 4) ? ftCol : (!i && idx === len - 1 ? ftCol : Config.frontColor))
      })
    }
  }

  //text(offs.toFixed(2), 140, 40)
  if (offs >= texts[0][2] && offs <= texts[0][3]) {
    const img = t.photo
    Shared.ctx.fillStyle = Config.grayColor
    Shared.ctx.fillRect(img.x - 1, img.y - 1, img.width + 2, img.height + 2)
    drawSprite(t.photo)
  }
}

export function update(t) {
  t.photo.x = 65 - Shared.offsX
  t.photo.y = 238
}

function onProject(t, e) {
  const p = e.target.innerText
  const l = t.texts.length
  for (let i = 0; i < l; i++) {
    const line = t.texts[i]
    if (line[0] === p) {
      fire('offs', !line[2] ? 0 : line[2] + VIEW_OFFS)
      break
    }
  }
  e.preventDefault()
}
