const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Completed", "Started", "Process", "Assigned"],
    default: "Assigned",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Todo = model("Todo", TodoSchema);

module.exports = Todo;
