import express from "express";
import { addTask, deleteTask, getTask } from "../controllers/TaskController.js";

const TaskRouter = express.Router();

TaskRouter.post("/", addTask);
TaskRouter.get("/", getTask);
TaskRouter.delete("/:id", deleteTask);

export default TaskRouter;
