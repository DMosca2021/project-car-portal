const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const { Schema } = mongoose;

const projectSchema = new Schema({
    projectDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    budget: {
      type: Number,
    },
    timeSpent: {
      type: Number,
      min: 0,
      default: 0
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
    }, 
    note: {
      type: Schema.Types.ObjectId,
      ref: 'Note',
    }
  });

  const Project = mongoose.model('Project', projectSchema);

  module.exports = Project;