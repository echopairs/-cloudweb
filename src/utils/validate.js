export function isvalidUsername(val) {
  let result = true;
  if (!val) {
    result = false;
  } else if (val.length < 3 || val.length > 16) {
    result = false;
  }
  return result;
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}
/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}
/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}
/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/* 用戶名不为空*/
export function username(rule, val, cb) {
  if (!val) {
    cb(new Error('用户名不能为空'));
  } else if (val.length < 3 || val.length > 16) {
    cb(new Error('用戶名应为3-16位'));
  } else {
    cb();
  }
}

/* 密码验证 */
export function password(rule, val, cb) {
  if (!val) {
    cb(new Error('密码不能为空'));
  } else if (val.length < 8) {
    cb(new Error('密码应长于8位'));
  } else if (!/^\w*$/.test(val)) {
    cb(new Error('密码只能包含字母，数字和下划线'));
  } else if (!/([a-zA-Z]+\d+)|(\d+[a-zA-Z]+)/.test(val)) {
    cb(new Error('密码应至少包含一个字母和数字'));
  } else {
    cb();
  }
}

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
