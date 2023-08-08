import express from "express";
import ctrlTask from "../controllers/task.controller.js";

export const routerTask = express.Router();

routerTask.get("/", ctrlTask.getTasks);
routerTask.post("/addTask", ctrlTask.addTask);
routerTask.patch("/updateTask/:id", ctrlTask.updateTask);
routerTask.delete("/delTask/:id", ctrlTask.deleteTask);
