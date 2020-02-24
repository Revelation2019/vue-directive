import axios from 'axios'

const service = axios.create({
  url: 'http://127.0.0.1:3001',
  timeout: 4500000
})

export const post = (url, params) => {
  return service({
    url,
    method: 'post',
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const get = (url, params) => {
  return service({
    url,
    method: 'get',
    params: params
  })
}

export default service
