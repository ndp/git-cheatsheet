require("../../git-cheatsheet/commands.js")
global.navigator = {
  userAgent: 'test-chrome'
}
global.document  = { cookie: '' }

global.cookies        = require("../../git-cheatsheet/cookies.js")
global.detectLanguage = require("../../git-cheatsheet/base.js").detectLanguage
global.prev           = require("../../git-cheatsheet/base.js").prev
global.next           = require("../../git-cheatsheet/base.js").next
global.esc            = require("../../git-cheatsheet/base.js").esc
