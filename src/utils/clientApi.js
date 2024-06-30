import axios from 'axios'
import {apiKey, lang, API_URL, AUTH_URL} from '../config'

// utilise 'sleep' pour simuler des api longue
//const sleep = t => new Promise(resolve => setTimeout(resolve, t))

const clientApi = async endpoint => {
  const page = 1
  const startChar = endpoint.includes('?') ? `&` : `?`
  const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`
  return axios.get(`${API_URL}/${endpoint}${keyLang}`).catch(error => {
    if (error.response) {
      const err = {
        ...error.response,
        message: error.response?.data?.status_message,
      }
      return Promise.reject(err)
    } else {
      return Promise.reject(error)
    }
  })
}

const clientAuth = (endpoint, {token, data}) => {
  console.log('🚀 ~ clientAuth ~ {token, data}:', {token, data})
  console.log('🚀 ~ clientAuth ~ endpoint:', endpoint)
  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
    },
  }
  return data
    ? axios.post(`${AUTH_URL}/${endpoint}`, JSON.stringify(data), config)
    : axios.get(`${AUTH_URL}/${endpoint}`, config)
}

const clientNetFlix = async (endpoint, {token, data, method = 'GET'}) => {
  const config = {
    method,
    url: `${AUTH_URL}/${endpoint}`,
    data: JSON.stringify(data),
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
    },
  }
  return axios(config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      if (error.response) {
        return Promise.reject(error.response.data)
      } else {
        return Promise.reject(error)
      }
    })
}

export {clientApi, clientAuth, clientNetFlix}
