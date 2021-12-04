const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String! 
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
    transactions: [Transaction]
    todos: [Todo]
    notes: [Note]
    userID: Int
  }

  type Vehicle {
    _id: ID
    type: String
    year: Int
    make: String
    model: String
    trimLvl: String
    engineDisp: Float
    projectID: Int
  }

  type Transaction {
    _id: ID!
    name: String!
    value: Int!
    date: String!
    projectID: Int
  }

  type Note{
    _id: ID!
    title: String!
    content: String!
    createdOn: String!
    projectID: Int
  }

  type Todo{
    _id: ID!
    content: String!
    createdOn: String!
    isComplete: Boolean!
    projectID: Int
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    getUser(_id: ID!): User # Need to figure out how to query with Auth
    getAllUsers: [User] # This query works -- Resolver Works
    getProject(_id: ID!): Project # This query works -- Resolver works
    getAllProjects: [Project] # This query works -- Resolver Works
    getAllVehicles: [Vehicle]
    # transactions: [Transaction]
    # notes: [Note]
    # todos: [Todo]
  }

  input ProjectInput {
    projectDate: String
    name: String
    description: String
    image: String
    budget: Int
    timeSpent: Float
  }

  input VehicleInput {
    type: String
    year: Int
    make: String
    model: String
    trimLvl: String
    engineDisp: Float
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth # This mutation and resolver works
    addProject(input: ProjectInput!): Project
    addVehicle(input: VehicleInput): Vehicle
    # addTransaction(products: [ID]!): Transaction
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    # updateProject(_id: ID!, name: String, description: String, image: String, budget: Int, timeSpent: Float): Project
    # updateVehicle(type: String, year: Int, make: String, model: String, trimLvl: String, engineDisp: Int): Vehicle 
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;


// (name: String!, description: String!, budget: Int!, timeSpent: Int!)