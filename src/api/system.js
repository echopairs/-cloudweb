import * as api from './api'

export function login (params) {
  console.log('login ' + params.username + ' ' + api.LOGIN)
  return new Promise((resolve, reject) => {
    resolve ('ok')
  })
}
