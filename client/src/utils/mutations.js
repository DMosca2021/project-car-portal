import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PROJECT = gql`
mutation ($input: ProjectInput!){
  addProject (input: $input) {
    name
    description
    image
    budget
    timeSpent
  }
}
`;

export const ADD_VEHICLE = gql`
mutation ($input: VehicleInput){
  addVehicle (input: $input){
    type
    year
    make
    model
    trimLvl
    engineDisp
  }
}
`;