export const typeDefs = `#graphql

  type Department {
    id: Int
    name: String
    description: String
    # un departamento tiene muchas ciudades y muchas ciudades perteneces a un departamento
    cities: [City]
  }

  type City {
    id: Int
    name: String
    description: String
    # cada ciudad pertenece a un departamento y el departamento tiene muchas ciudades
    department: Department
  }

  type Query {
    # departamentos
    departments: [Department]
    department(id: Int!): Department
    departmentWithCities(id: Int!): Department
    departmentByName(name: String!): Department

    # ciudades
    cities: [City]
    city(id: Int!): City
    cityByName(name: String!): City
    searchCities(keyword: String!): [City]
  }
`;