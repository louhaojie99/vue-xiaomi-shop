import Cookies from "js-cookie";

const TokenKey = "token";

// 设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

// 获取token
export function getToken() {
  return Cookies.get(TokenKey);
}

// 删除token
export function removeToken() {
  return Cookies.remove(TokenKey);
}
