import {
  GET_USERAGENT, GET_USERINFO, SAVE_USERINFO, GET_NETWORKTYPE
} from './mutation-types.js'
import { defaultIcons } from '~/service/iconList'
import { GetUserInfo } from '~/service/getData'
import { userAgent, getWXUrl } from '~/plugins/utils-ssr'

let getStore, setStore
if (process.client) {
  getStore = require('~/plugins/utils').getStore
  setStore = require('~/plugins/utils').setStore
}

export const state = () => ({
  userInfo: (getStore && getStore('userInfo')) || {}, // 用户信息
  userAgent: (getStore && getStore('userAgent')) || {}, // 浏览器设备信息
  wxIndexUrl: (getWXUrl && getWXUrl('#/home')) || '',
  wxLoginUrl: (getWXUrl && getWXUrl('#/login')) || '',
  netWorkType: '', // 网络类型
  defaultIcons: defaultIcons || []
})

export const actions = {
  nuxtServerInit ({ commit }, { req, app }) {
    if (req.headers['user-agent']) {
      commit(GET_USERAGENT, (userAgent && userAgent(req.headers['user-agent'])))
    }
  },
  async getUserInformation ({ state, commit }, payload) {
    let data = await GetUserInfo(payload)
    if (data.Type === 1) {
      setStore('userInfo', data.Data)
      commit(GET_USERINFO, data.Data)
    }
  },
  saveUserInfo ({ state, commit }, payload) {
    setStore('userInfo', payload)
    commit(SAVE_USERINFO, payload)
  },
  getUserAgent ({ state, commit }, payload) {
    let data = userAgent()
    commit(GET_USERAGENT, data)
  }
}

export const mutations = {
  // 获取用户信息
  [GET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  // 获取userAgent
  [GET_USERAGENT] (state, userAgent) {
    state.userAgent = userAgent
  },
  // 获取网络类型
  [GET_NETWORKTYPE] (state, netWorkType) {
    state.netWorkType = netWorkType
  },
  // 保存用户信息
  [SAVE_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
