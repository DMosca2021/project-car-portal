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
    # Do i Need a user id to make the project tied to a particular project?
  }

  type Vehicle {
    _id: ID
    type: String
    year: Int
    make: String
    model: String
    trimLvl: String
    engineDisp: Float
    # Do i Need a project id to make the vehicle tied to a particular project?
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
    getUser(email: String!): User # Need to figure out how to query with Auth
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
    addProject(project: ProjectInput): Project # This mutation and resolver works, need to add all fields to project still.
    addVehicle(vehicle: VehicleInput): Vehicle
    # addTransaction(products: [ID]!): Transaction
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    # updateProject(_id: ID!, name: String, description: String, image: String, budget: Int, timeSpent: Float): Project
    # updateVehicle(type: String, year: Int, make: String, model: String, trimLvl: String, engineDisp: Int): Vehicle 
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
