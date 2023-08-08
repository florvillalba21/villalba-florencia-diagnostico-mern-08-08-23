import axios from "axios";
import { useState } from "react";

export const FormAddTask = () => {
  const [data, setData] = useState({
    taskName: "",
    taskDescription: ""
  });

  const handleInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };


  const addTask = () => {
    console.log(data)
    axios.post("http://localhost:3000/addTask", data)
    .then(res => {console.log(res.data)})
    .catch(err => console.log(err));
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="taskName"
          placeholder="Ingresa el nombre de la tarea"
          onChange={handleInput}
        />
        <br />
        <input
          type="text"
          name="taskDescription"
          placeholder="Ingresa la descripcion"
          onChange={handleInput}
        />
        <br />

        <button type="button" onClick={addTask}>
          Agregar tarea
        </button>
      </form>
    </div>
  );
};
