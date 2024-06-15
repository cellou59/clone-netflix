import axios from 'axios'
import {apiKey, lang, API_URL, AUTH_URL} from '../config'

// utilise 'sleep' pour simuler des api longue
const sleep = t => new  Promise((resolve) =>setTimeout(resolve, t))

const clientApi = async endpoint => {
  sleep(5000)
  const page = 1
  const startChar = endpoint.includes('?') ? `&` : `?`
  const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`
  return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}

const clientAuth = (endpoint, {token, data}) => {
  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
    },
  }
  sleep(5000)
  return data
    ? axios.post(`${AUTH_URL}/${endpoint}`, JSON.stringify(data), config)
    : axios.get(`${AUTH_URL}/${endpoint}`, config)
}

export {clientApi, clientAuth}
