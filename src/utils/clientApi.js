import axios from 'axios'
import {apiKey, lang, API_URL} from '../config'
const sleep = t => new Promise(r => setTimeout(r,t))

const clientApi = async endpoint => {
  await sleep(2000)
  const page = 1
  const startChar = endpoint.includes('?') ? `&` : `?`
  const keyLang = `${startChar}api_keyd=${apiKey}&language=${lang}&page=${page}`
  return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}

export {clientApi}
