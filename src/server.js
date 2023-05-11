const express = require('express');
const app = express();
const path = require('path');
const {principal, leerCanciones, BorrarCancion, editarCancion, insertarCancion} = require('./controllers/funciones');

const port=3000;

//Usar carpeta public
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.get("/", principal);

app.get("/canciones", leerCanciones);

app.post("/canciones", insertarCancion);

app.delete("/canciones/:id", BorrarCancion);

app.put("/canciones/:id", editarCancion);

app.listen(port, console.log(`Servidor encendido en el puerto ${port}!`));