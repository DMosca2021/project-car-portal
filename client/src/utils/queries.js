import { gql } from "@apollo/client";

export const QUERY_PROJECTS = gql`
  query getProjects {
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
`;

export const QUERY_PROJECT_BY_ID = gql`
  query projectByID($id: ID!) {
    getProject(_id: $id) {
      projectDate
      name
      description
      image
      budget
      timeSpent
      vehicle {
        type
        year
        make
        model
        trimLvl
        engineDisp
      }
      transactions {
        name
        value
        date
      }
      todos {
        content
        createdOn
        isComplete
      }
      notes {
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

export const QUERY_VEHICLES = gql`
  query getVehicles {
    getAllVehicles {
      _id
      type
      year
      make
      model
      trimLvl
      engineDisp
      projectID
    }
  }
`;
