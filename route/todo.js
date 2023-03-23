const express = require("express");
const {
  GetAllTodo,
  GetTodoById,
  UpdateTodoById,
  CreateTodo,
  DeleteTodoById,
} = require("../controller/todo");

// crete routes for todo
const router = express.Router();

// creating crud methods for todo
router.get("/", GetAllTodo);
router.post("/", CreateTodo);
router.get("/:id", GetTodoById);
router.patch("/:id", UpdateTodoById);
router.delete("/:id", DeleteTodoById);

module.exports = router;
