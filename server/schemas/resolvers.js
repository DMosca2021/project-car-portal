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
    getAllUsers: async () => {
      return User.find().populate("project");
    },
    getUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    getAllProjects: async () => {
      return await Project.find().populate("vehicle");
    },
    getProject: async (parent, { _id }) => {
      return await Project.findById(_id).populate("vehicle");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addProject: async (parent, args, context) => {
      const {  name, description } = args.project;
      const project = new Project({ name, description });
      await project.save();
      return project;
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
