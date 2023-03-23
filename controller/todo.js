const Todo = require("../model/todo");

// Controller for getting all todo
const GetAllTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "sever error" });
  }
  next();
};

// Controller for Creating todo
const CreateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      desc: req.body.desc,
      status: req.body.status,
    });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "sever error" });
  }
  next();
};

// Controller for getting todo by id
const GetTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo does not exist" });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "sever error" });
  }
  next();
};

// Controller for updating todo by id
const UpdateTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      desc: req.body.desc,
      status: req.body.status,
    });
    if (!todo) return res.status(404).json({ message: "Todo does not exist" });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "sever error" });
  }
  next();
};

// Controller for Deleting todo by id
const DeleteTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo does not exist" });
    res.status(204).json(todo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "sever error" });
  }
  next();
};

module.exports = {
  GetAllTodo,
  GetTodoById,
  UpdateTodoById,
  CreateTodo,
  DeleteTodoById,
};
