require("../../src/commands.js")
global.navigator = {
  userAgent: 'test-chrome'
}
global.document  = { cookie: '' }

global.cookies        = require("../../src/cookies.js")
global.detectLanguage = require("../../src/base.js").detectLanguage
global.prev           = require("../../src/base.js").prev
global.next           = require("../../src/base.js").next
global.esc            = require("../../src/base.js").esc
