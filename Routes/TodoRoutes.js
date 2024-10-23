const express = require("express");
const router = express.Router();
const { TodoForm } = require("../Models/TodoModel");
const _ = require("lodash");

router.get("/", async (req, res) => {
  const todos = await TodoForm.find();
  res.send(todos);
});

router.get("/:_id", async (req, res) => {
  const todos = await TodoForm.findById(req.params._id);
  res.send(todos);
});

router.post("/", async (req, res) => {
  let todos = new TodoForm({
    Task: req.body.Task,
    Status: req.body.Status,
  });

  todos = await todos.save();

  res.send(todos);
});

router.put("/:_id", async (req, res) => {
  const todos = await TodoForm.findByIdAndUpdate(
    req.params._id,
    {
      Task: req.body.Task,
      Status: req.body.Status,
    },
    {
      new: true,
    }
  );

  if (!todos) return res.status(400).send("the Task with given id not found");
  res.send(todos);
});

router.delete("/:_id", async (req, res) => {
  let todos = await TodoForm.findByIdAndDelete(req.params._id);
  if (!todos) return res.status(400).send("This Task is already been deleted");
  res.send(todos);
});

module.exports = router;
