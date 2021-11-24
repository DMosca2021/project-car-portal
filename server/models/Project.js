const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    projectDate: {
        type: Date,
        default: Date.now
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
      required: true
    },
    timeSpent: {
      type: Number,
      min: 0,
      default: 0
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: true
    }
  });

  const Project = mongoose.model('Project', projectSchema);

  module.exports = Project;