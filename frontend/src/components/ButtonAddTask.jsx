import { useNavigate } from "react-router-dom"
export const ButtonAddTask = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={()=>{navigate("/add")}}>Crear una nueva tarea</button>
    </div>
  );
};
