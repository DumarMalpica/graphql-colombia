# PARCIAL GRAPHQL
---

## Instalación y ejecución

```bash
# 1. Entrar a la carptea
cd graphql-colombia

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor
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

---

## Ejemplos

### Listar todos los departamentos

```graphql
query {
  departments {
    id
    name
    description
  }
}
```

### Obtener un departamento por ID

```graphql
query {
  department(id: 5) {
    id
    name
    description
  }
}
```

### Obtener un departamento por nombre

```graphql
query {
  departmentByName(name: "Boyacá") {
    id
    name
    description
  }
}
```

### Listar todas las ciudades con su departamento

```graphql
query {
  cities {
    id
    name
    description
    department {
      id
      name
    }
  }
}
```

### Obtener una ciudad por ID

```graphql
query {
  city(id: 1) {
    id
    name
    description
    department {
      id
      name
    }
  }
}
```

### Obtener una ciudad por nombre

```graphql
query {
  cityByName(name: "Sogamoso") {
    id
    name
    description
    department {
      id
      name
    }
  }
}
```

### Buscar ciudades por keyword

```graphql
query {
  searchCities(keyword: "soga") {
    id
    name
    department {
      name
    }
  }
}
```