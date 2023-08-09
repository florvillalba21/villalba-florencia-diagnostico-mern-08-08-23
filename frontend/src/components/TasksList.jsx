import { useEffect, useState } from "react";
import axios from "axios";

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res);
          setTasks(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleTaskState = async (id) => {
    axios
      .patch(`http://localhost:3000/updateTask/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(getTasks);
  };

  const deleteTask = async (id) => {
    axios
      .delete(`http://localhost:3000/delTask/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(getTasks);
      
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <table className="table table-dark table-strip ">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Descripcion</th>
            <th>Completado</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((value, key) => (
            <tr key={key}>
              <td>{value.taskName}</td>
              <td>{value.taskDescription}</td>
              <td>{value.taskCompleted.toString()}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    toggleTaskState(value._id);
                  }}
                >
                  Cambiar estado
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    deleteTask(value._id);
                  }}
                >
                  Eliminar tarea
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
