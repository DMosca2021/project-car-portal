const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  isComplete: {
    type: Boolean,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
