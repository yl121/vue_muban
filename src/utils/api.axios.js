import httpRequest from './axios.js'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
console.log('baseU', baseUrl)
const axios = new httpRequest(baseUrl)

export default axios
