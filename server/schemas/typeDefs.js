const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    projects: [Project]
  }

  type Project {
    _id: ID
    projectDate: String
    name: String
    description: String
    image: String
    budget: Int
    timeSpent: Float
    vehicle: Vehicle
  }

  type Vehicle {
    _id: ID
    type: String
    year: Int
    make: String
    model: String
    trimLvl: String
    engineDisp: Int
  }

  type Transaction {
    _id: ID
    name: String
    value: Int
    date: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

 
  type Query {
    projects(vehicle: ID, name: String): [Project]
    project(_id: ID!): Project
    user: User
    transaction(_id: ID!): Transaction
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addTransaction(products: [ID]!): Transaction
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProject(_id: ID!, quantity: Int!): Project
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
