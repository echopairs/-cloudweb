import axios from 'axios'
//var axios = require('axios')

const baseUrl = 'http://127.0.0.1:9090'

const service = axios.create({
  baseURL: baseUrl,
  transformRequest: [function (data, headers) {
    console.log('before request' + headers)
    return String(data)
  }],
  transformResponse: [function (data, headers) {
    console.log('before deal with response')
    return data
  }]
})

service.post('/login', {
  username: 'zsy',
  password: '123456'
})
  .then((response) => {
    console.log(response.status())
  })
  .catch((error) => {
    console.log(error.message)
  })
