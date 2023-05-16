const express = require('express');
const app = express();
const path = require('path');

//Callbacks importados desde la el archivo funciones.js
const {principal, leerCanciones, BorrarCancion, editarCancion, insertarCancion} = require('./controllers/funciones');

//generar constante que determina el puerto a usar
const PORT = process.env.PORT || 3000;

//Usar carpeta public
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//Middleware para el análisis del cuerpo de la solicitud en formato JSON.
app.use(express.json())

//Se almacenan los callbacks en /controllers/funciones.js para ordenar los métodos de las distintas rutas.

app.get("/", principal);

app.get("/canciones", leerCanciones);

app.post("/canciones", insertarCancion);

app.delete("/canciones/:id", BorrarCancion);

app.put("/canciones/:id", editarCancion);

//Iniciar el servidor de Express y escuchar las solicitudes entrantes el puerto 3000 u otro especificado en variables de entorno.

app.listen(PORT, console.log(`Servidor encendido en el puerto ${PORT}!`));