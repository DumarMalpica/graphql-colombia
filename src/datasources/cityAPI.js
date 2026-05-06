// llamado a la api para los gets de las ciudades

import fetch from 'node-fetch';

const BASE_URL = 'https://api-colombia.com/api/v1/City';

async function handleResponse(response, context) {
  if (!response.ok) {
    throw new Error(
      `Error ${response.status} al consultar ${context}: ${response.statusText}`
    );
  }
  return response.json();
}

export const cityAPI = {
  // toma todas las ciudades
  async getAllCities() {
    const res = await fetch(BASE_URL);
    return handleResponse(res, 'todas las ciudades');
  },

  // toma una ciudad por el ID
  async getCityById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    return handleResponse(res, `ciudad id=${id}`);
  },

  // toma una ciudad por el nombre tal cual
  async getCityByName(name) {
    const res = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}`);
    const data = await handleResponse(res, `ciudad nombre="${name}"`);
    return Array.isArray(data) ? data[0] ?? null : data;
  },

  // busca una cidad por alguna palabra
  async searchCities(keyword) {
    const res = await fetch(`${BASE_URL}/search/${encodeURIComponent(keyword)}`);
    return handleResponse(res, `búsqueda keyword="${keyword}"`);
  },
};
