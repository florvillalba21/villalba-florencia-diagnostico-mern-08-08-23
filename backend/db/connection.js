import mongoose from "mongoose";

const DB_URL = "mongodb://127.0.0.1:27017/tlpIV";

 const connection =mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Conexión exitosa a la base de datos");
    })
    .catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
    });

export default connection;
