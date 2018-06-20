import request from "../utils/request"

export function loginByUserName(username, password) {
  const data = {
    username,
    password
  }
  console.log("loginByUserName");
  return request({
    url: '/login',
    method: 'post',
    data
  });
}

export function logoutByUserName(username) {
  const param = {
    username: username
  }
  return request({
    url: '/logout',
    method: 'post',
    data: param
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
