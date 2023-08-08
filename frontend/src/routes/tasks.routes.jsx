import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Index } from "../views/";
import { AddTask } from "../views/addTask";



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/add" element={<AddTask/>}/>
 

      </Routes>
    </BrowserRouter>
  );
};