import express, { Router } from "express";
import todoRoutes from "../controllers/todoController.js";

const router: Router = express.Router();

router.get("/", todoRoutes.getAllTodos);

router.post("/", todoRoutes.createNewTodo);

router.patch("/:todoId", todoRoutes.updateTodo);

router.delete("/:todoId", todoRoutes.deleteTodo);

export default router;
