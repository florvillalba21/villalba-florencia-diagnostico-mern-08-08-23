import Task from "../models/task.model.js";

const ctrlTask = {
  async getTasks(req, res) {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
      res.status(500).json({ error: "Error al obtener las tareas" });
    }
  },

  async addTask(req, res) {
    try {
      const { taskName, taskDescription } = req.body;
      console.log(taskDescription);
      const newTask = new Task({ taskName, taskDescription });
      await newTask.save();

      res.json({ msg: "Tarea Agregada", newTask });
    } catch (error) {
      console.error("Error al agregar tarea:", error);
      res.status(500).json({ error: "Error al agregar tarea" });
    }
  },

  async updateTask(req, res) {
    const taskId = req.params.id;
    
    try {
      const task = await Task.findById(taskId);
      const updateTask = await Task.findByIdAndUpdate(
        taskId,
        { $set: { taskCompleted: !task.taskCompleted } },
        { new: true }
      ).exec();

      if(!updateTask){
        res.json({msg: "no se pudo actualizar"})
      }
      res.json(updateTask)
    } catch (error) {
      console.error("Error al editar tarea:", error);
      res.status(500).json({ error: "Error al editar tarea" });
    }
  },

  async deleteTask(req, res) {
    
    try {
      const taskId = req.params.id;
      console.log(taskId);
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ error: "Tarea no encontrada" });
      }
      res.json({ msg: "Tarea eliminada", deletedTask });
    } catch (error) {
      console.error("Error al editar tarea:", error);
      res.status(500).json({ error: "Error al editar tarea" });
    }
  },
};

export default ctrlTask;
