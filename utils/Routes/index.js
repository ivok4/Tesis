//export const BASE_URL = 'https://umaiwikiapi.revisionalpha.com';   
export const BASE_URL = 'http://localhost:3000'; 

export const routes = {
  signup: `${BASE_URL}/auth/signup/`,
  login: `${BASE_URL}/auth/local/`,
  me: `${BASE_URL}/users/me`,
  edition : `${BASE_URL}/ediciones`,
};
