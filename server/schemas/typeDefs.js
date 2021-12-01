const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String! # Need to add this to the User model!!!!!
    projects: [Project]
  }

  type Project {
    _id: ID
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
    _id: ID!
    type: String!
    year: Int!
    make: String!
    model: String!
    trimLvl: String
    engineDisp: Int
    
  }

  type Transaction {
    _id: ID!
    name: String!
    value: Int!
    date: String!
  }

  type Note{
    _id: ID!
    title: String!
    content: String!
    createdOn: String!
  }

  type Todo{
    _id: ID!
    content: String!
    createdOn: String!
    isComplete: Boolean!
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    user(email: String!): User # Need to figure out how to query with Auth
    users: [User] # This query works -- Resolver Works
    getProjects: [Project] # This query works -- Resolver Works
    project(_id: ID!): Project # This query works -- Resolver works
    projects(email: String!): [Project]
    vehicle(id: ID!): Vehicle
    # transactions: [Transaction]
    # notes: [Note]
    # todos: [Todo]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    # addProject(projectDate: String!, name: String!, description: String, image: String, budget: Int, timeSpent: Float): Project
    # addVehicle(type: String!, year: Int!, make: String!, model: String!, trimLvl: String, engineDisp: Int): Vehicle
    # addTransaction(products: [ID]!): Transaction
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    # updateProject(_id: ID!, name: String, description: String, image: String, budget: Int, timeSpent: Float): Project
    # updateVehicle(type: String, year: Int, make: String, model: String, trimLvl: String, engineDisp: Int): Vehicle 
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
