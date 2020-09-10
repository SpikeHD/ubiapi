const axios = require('axios')
const util = require('./util')

const default_url = 'https://game-rainbow6.ubi.com'

class Rainbow {
  constructor(ubi, platform, id) {
    this.Ubisoft = ubi
    this.platform = platform
    this.id = id
  }

  /**
   * Return seasons list
   */
  async getSeasonsList() {
    let path = '/assets/data/seasons.6aada152.json'
    let res = await this.Ubisoft.request(default_url, path)

    return res.data
  }

  /**
   * Return ranks list
   */
  async getRanksList() {
    let path = '/assets/data/ranks.f6cbd78b.json'
    let res = await this.Ubisoft.request(default_url, path)

    return res.data
  }

  /**
   * Return operator list
   */
  async getRanksList() {
    let path = '/assets/data/operators.269788a7.json'
    let res = await this.Ubisoft.request(default_url, path)

    return res.data
  }

  /**
   * Return weapons list
   */
  async getRanksList() {
    let path = '/assets/data/weapons.8a9b3d9e.json'
    let res = await this.Ubisoft.request(default_url, path)

    return res.data
  }

  /**
   * Get overall R6 stats
   */
  async getStatistics() {
    let path = '/' + this.Ubisoft.locale + '/' + this.platform + '/player-statistics/' + this.id + '/multiplayer'
    
    // Request with default options
    let res = await this.Ubisoft.request(default_url, path)

    return res.data
  }
}

module.exports = Rainbow