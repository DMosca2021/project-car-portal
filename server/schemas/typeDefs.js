const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    projects: [Project]
  }

  type Project {
    _id: ID!
    projectDate: String!
    name: String!
    description: String
    image: String
    budget: Int
    timeSpent: Float
    vehicle: Vehicle
    transactions: [Transaction]
    todos: [Todo]
    notes: [Note]
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
    _id: ID!
    name: String
    value: Int
    date: String
  }

  type Note{
    _id: ID!
    title: String
    content: String
    createdOn: String
  }

  type Todo{
    _id: ID!
    content: String!
    isComplete: Boolean!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    users: [User]
    project(_id: ID!): Project
    projects: [Project]
    transactions: [Transaction]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    # addProject
    # addVehicle
    addTransaction(products: [ID]!): Transaction
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProject(_id: ID!, quantity: Int!): Project
    # updateVehicle
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
