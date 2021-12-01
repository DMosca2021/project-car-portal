const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Project,
  Vehicle,
  Transaction,
  Note,
  Todo,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    getAllUsers: async () => {
      return User.find().populate("project");
    },

    getProject: async (parent, { _id }) => {
      return await Project.findById(_id).populate("vehicle");
    },

    getAllProjects: async () => {
      return await Project.find().populate("vehicle");
    },

    getAllVehicles: async () => {
      return Vehicle.find()
    } 

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addProject: async (parent, args, context) => {
      const project = new Project(args.project);
      await project.save();
      return project;
    },

    addVehicle: async (parent, args, context) => {
      const vehicle = new Vehicle(args.vehicle)
      await vehicle.save();
      return vehicle;
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
