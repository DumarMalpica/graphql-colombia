# PARCIAL GRAPHQL
---

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor
npm start
```

Entrar al servidor en el puerto 4000

```
http://localhost:4000/graphql
```

---

## Esquema GraphQL

```graphql
type Department {
  id: Int
  name: String
  description: String
  cities: [City]
}

type City {
  id: Int
  name: String
  description: String
  department: Department
}

type Query {
  departments: [Department]
  department(id: Int!): Department
  departmentByName(name: String!): Department
  departmentWithCities(id: Int!): Department
  cities: [City]
  city(id: Int!): City
  cityByName(name: String!): City
  searchCities(keyword: String!): [City]
}
```