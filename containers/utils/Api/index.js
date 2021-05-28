import Axios from 'axios';
import { BASE_URL, routes } from 'utils';
import Router from 'next/router';
import { parseCookies, destroyCookie } from 'nookies';

const api = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  function(error) {
    if (401 === error.response.status) {
      Router.push('/login');
    } else {
      return Promise.reject(error);
    }
  },
);
export default api;

export const addBearerToken = token => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeBearerToken = () => {
  delete api.defaults.headers.Authorization;
};

//GET para collections por Slug
export const getCollectionBySlug = async (slug, collection, res) => {
  try {
    const response = await api.get(`${BASE_URL}/${collection}?slug=${slug}`);
    const responseData = response.data;
    if (responseData.length) {
      const dataObject = responseData[0];
      return { ...dataObject };
    } else {
      res.setHeader('location', '/404');
      res.statusCode = 302;
      res.end();
      return {};
    }
  } catch (error) {
    res.setHeader('location', '/404');
    res.statusCode = 302;
    res.end();
    return {};
  }
};

//GET para collections
export const getDataCollection = async (collection, res, params) => {
  try {
    const { data } = await api.get(
      `${BASE_URL}/${collection}`,
      params ? { params } : {},
    );
    return data;
  } catch (error) {
    res.setHeader('location', '/404');
    res.statusCode = 302;
    res.end();
    return {};
  }
};

//GET user data
export const getUserData = async ctx => {
  const { res } = ctx;
  const cookies = parseCookies(ctx);
  if (cookies.token) {
    addBearerToken(cookies.token);
    try {
      const response = await api.get(`${routes.me}`);
      const responseData = response.data;
      if (responseData) {
        return { ...responseData };
      } else {
        console.log('No user data');
        destroyCookie(ctx, 'token');
        res.setHeader('location', '/login');
        res.statusCode = 302;
        res.end();
        return {};
      }
    } catch (error) {
      console.log('Bad request');
      destroyCookie(ctx, 'token');
      res.setHeader('location', '/login');
      res.statusCode = 302; //chequear este codigo, deberia ser 400?
      res.end();
      return {};
    }
  } else {
    console.log('No token');
    res.setHeader('location', '/login');
    res.statusCode = 302; //chequear este codigo, deberia ser 400?
    res.end();
    return {};
  }
};
