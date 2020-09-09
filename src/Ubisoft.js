const { mark } = require("@babel/runtime-corejs3/regenerator")

const default_locale = 'en-US'
const default_market = 'US'

class Ubisoft {
  constructor(appid, locale = default_locale, market = default_market) {
    this.appid = appid
    this.locale = locale
    this.market = market
    this.token = ''

    if (!this.appid) throw new Error('None or invalid appid provided in constructor')
  }

  async createToken(username, password) {
    return this.token = Buffer.from(username + ':' + password).toString('base64')
  }
}

module.exports = Ubisoft