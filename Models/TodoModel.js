const mongoose = require("mongoose");
const Joi = require("joi");

const TodoForm = mongoose.model(
  "Todos",
  new mongoose.Schema({
    Task: {
      type: String,
      required: true,
    },
    Status: {
      type: Boolean,
      required: true,
    },
  })
);

exports.TodoForm = TodoForm;
