// Conexión del esquema GraphQL con los datos de la app

import { departmentAPI } from './datasources/departmentAPI.js';
import { cityAPI } from './datasources/cityAPI.js';

export const resolvers = {

  Query: {

    // Departamentos
    departments: async () => {
      return departmentAPI.getAllDepartments();
    },

    department: async (_, { id }) => {
      return departmentAPI.getDepartmentById(id);
    },

    departmentByName: async (_, { name }) => {
      return departmentAPI.getDepartmentByName(name);
    },

    departmentWithCities: async (_, { id }) => {
      const department = await departmentAPI.getDepartmentById(id);
      const cities = await departmentAPI.getCitiesByDepartment(id);

      return { ...department, cities };
    },

    // Ciudades
    cities: async () => {
      return cityAPI.getAllCities();
    },

    city: async (_, { id }) => {
      return cityAPI.getCityById(id);
    },

    cityByName: async (_, { name }) => {
      return cityAPI.getCityByName(name);
    },

    searchCities: async (_, { keyword }) => {
      return cityAPI.searchCities(keyword);
    },
  },

  Department: {
    cities: async (parent) => {
      if (parent.cities) return parent.cities;
      return departmentAPI.getCitiesByDepartment(parent.id);
    },
  },

  City: {
    department: async (parent) => {
      if (parent.department) return parent.department;
      if (parent.departmentId) {
        return departmentAPI.getDepartmentById(parent.departmentId);
      }
      return null;
    },
  },
};
