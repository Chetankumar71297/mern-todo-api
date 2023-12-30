//import * as asyncHandler from "express-async-handler";
import Todo from "../models/Todo.js";

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createNewTodo = async (req, res) => {
  try {
    const text = req.body.text;
    if (!text) {
      return res
        .status(400)
        .json({ message: "Provide some information about your todo" });
    }
    const todo = new Todo({
      text,
    });

    await todo.save();

    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.todoId);

    todo.complete = !todo.complete;

    await todo.save();

    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.todoId);

    res.json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { getAllTodos, createNewTodo, updateTodo, deleteTodo };
