// llamado a la api para los gets de los departamentos


import fetch from 'node-fetch';

const BASE_URL = 'https://api-colombia.com/api/v1/Department';

async function handleResponse(response, context) {
  if (!response.ok) {
    throw new Error(
      `Error ${response.status} al consultar ${context}: ${response.statusText}`
    );
  }
  return response.json();
}

export const departmentAPI = {
  // toma todos los departamentos
  async getAllDepartments() {
    const res = await fetch(BASE_URL);
    return handleResponse(res, 'todos los departamentos');
  },

  // toma un departamento por el id
  async getDepartmentById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    return handleResponse(res, `departamento id=${id}`);
  },

  // toma un departento por el nombre
  async getDepartmentByName(name) {
    const res = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}`);
    const data = await handleResponse(res, `departamento nombre="${name}"`);
    return Array.isArray(data) ? data[0] ?? null : data;
  },

  // toma las ciudades de un departamento por el id
  async getCitiesByDepartment(id) {
    const res = await fetch(`${BASE_URL}/${id}/cities`);
    return handleResponse(res, `ciudades del departamento id=${id}`);
  },
};
