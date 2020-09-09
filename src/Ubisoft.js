
const axios = require('axios')
const util = require('./util')

const default_locale = 'en-US'
const default_market = 'US'
const default_url = 'https://public-rest.a.upc.ubisoft.com'
let default_headers

class Ubisoft {
  constructor(appid, locale = default_locale, market = default_market) {
    this.appid = appid
    this.locale = locale
    this.market = market
    this.token = ''

    default_headers = {
      'Ubi-AppId':this.appid,
      'Ubi-Locale':this.locale,
      'Ubi-Market':this.market
    }

    if (!this.appid) throw new Error('None or invalid appid provided in constructor')
  }

  /**
   * Creates a B64 encoded string of the username and password
   * to be used as auth
   * 
   * @param {String} username 
   * @param {String} password 
   */
  async createToken(username, password) {
    return this.token = Buffer.from(username + ':' + password).toString('base64')
  }

  /**
   * Axios request wrapper function to do automatic sanitization
   * and stuff
   * 
   * This will also allow the usage of custom requests when using
   * the library
   * 
   * @param {String} url 
   * @param {String} path 
   * @param {Object} options 
   *  Axios options, defaults to a GEt request with default headers
   */
  async request(url, path, options = { method: 'GET', headers: default_headers }) {
    path = util.ubiEncode(path)
    console.log(url + path)
    let res = await axios(url + path, options)

    return res
  }

  // async getMe() {
  //   let options = {
  //     method: 'GET',
  //     headers: default_headers
  //   }
  //   let path = '/v3/users/me'

  //   let res = await this.request(default_url, path, options)

  //   return res.data
  // }

  /**
   * Get featured news. This is usually what shows up when you open
   * the Uplay application for the first time
   */
  async getFeaturedNews() {
    // Axios options
    let options = {
      method: 'GET',
      headers: default_headers
    }
    // News path and params
    let path = '/v1/news?filter=audience:normal,placement:_uplay_featured,type:featured|free|normal&sort=priority:asc,publicationDate:desc'

    let res = await this.request(default_url, path, options)

    return res.data
  }

  /**
   * Get news article via ID
   * 
   * @param {String|Object} data 
   */
  async getNewsBody(data) {
    let id

    if (typeof(data) == 'object') id = data.id
    else id = data

    // Axios options
    let options = {
      method: 'GET',
      headers: default_headers
    }
    // News path and params
    let path = '/v1/news/' + id + '/body'

    let res = await this.request(default_url, path, options)

    return res.data
  }
}

module.exports = Ubisoft