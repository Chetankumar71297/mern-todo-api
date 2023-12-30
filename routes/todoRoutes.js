import express from "express";
import todosController from "../controllers/todoController.js";
const router = express.Router();

router.get("/", todosController.getAllTodos);
router.post("/", todosController.createNewTodo);
router.patch("/:todoId", todosController.updateTodo);
router.delete("/:todoId", todosController.deleteTodo);

export default router;
