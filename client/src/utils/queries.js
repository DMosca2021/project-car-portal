import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  query getProjects {
    getProjects {
      _id
      projectDate
      name
      description
      image
      budget
      timeSpent
      vehicle {
        _id
        type
        year
        make
        model
        trimLvl
        engineDisp
      }
      transactions {
        _id
        name
        value
        date
      }
      todos {
        _id
        content
        createdOn
        isComplete
      }
      notes {
        _id
        title
        content
        createdOn
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      projects {
        _id
        projectDate
        name
        description
        image
        budget
        timeSpent
        vehicle {
          _id
          type
          year
          make
          model
          trimLvl
          engineDisp
        }
        transactions {
          _id
          name
          value
          date
        }
        todos {
          _id
          content
          createdOn
          isComplete
        }
        notes {
          _id
          title
          content
          createdOn
        }
      }
    }
  }
`;
