import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  taskCompleted: { type: Boolean, required: true, default: false}
});

const Task = model("Task", TaskSchema);
export default Task;


