const express = require("express");
const cors = require("cors");
const db = require('./utils/database');
const toDo = require("./models/toDo.model");
const ToDoRoutes = require('./routes/todo.routes')

toDo;

const PORT = 8000

db.authenticate()
    .then(() => {
        console.log("Conexión a base de datos OK")
    })
    .catch((error) => {
        console.log(error)
    })

db.sync()
    .then(() => {
        console.log("Base de datos sincronizada")
    })
    .catch((error) => {
        console.log(error)
    })

const app = express();

app.use(cors());

app.use(express.json());

app.use(ToDoRoutes);

app.get("/", (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});