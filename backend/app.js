import express, { json } from "express";
import connection from "./db/connection.js";
import cors from 'cors';
import { routerTask } from "./routes/task.routes.js";


const app = express();


app.use(cors())
app.use(json());
app.use(routerTask)


app.listen(3000, ()=>(console.log("Servidor escuchando en el puerto 3000")))