import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://api-mobilespecs.azharimm.site/'
});

export const getBrands = () => {
  return instanse.get('v2/brands');
}

export const getInterest = () => {
   return instanse.get('v2/top-by-interest')
}

export const getLatest = () => {
   return instanse.get('v2/latest');
}

export const getApple = () => {
   return instanse.get('v2/brands/apple-phones-48');
}

export const getSamsung = () => {
   return instanse.get('v2/brands/samsung-phones-9');
}

export const getXiaomi = () => {
   return instanse.get('v2/brands/xiaomi-phones-80');
}

export const getPhone = (slug) => {
   return instanse.get(`v2/${slug}`)
}

export const getDetail = (request) => {
   return instanse.get(request);
}

export const searchPhone = (name) => {
   return instanse.get(`v2/search?query=${name}`);
}