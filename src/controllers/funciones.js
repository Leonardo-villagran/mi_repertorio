const fs = require('fs')
const path = require('path');

//acceso a ruta del json
const productosJSON = path.join(__dirname, '../../public/data/repertorio.json');
const home = path.join(__dirname,"../../public/index.html");

//Callback que permite ver el index.html en la carpeta public
const principal = (req, res) => {
    res.status(200).sendFile(home);
};

//Callback que permite obtener las canciones en formato JSON
const leerCanciones = (req, res) => {
    const productos = JSON.parse(fs.readFileSync(productosJSON))
    res.status(200).json(productos)

}

//Callback que permite insertar canciones al repertorio
const insertarCancion = (req, res) => {

    const producto = req.body;
    const productos = JSON.parse(fs.readFileSync(productosJSON))
    productos.push(producto);
    fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2));
    res.status(201).send(`Canción insertada de id: ${producto.id} de título: ${producto.titulo} y artista: ${producto.artista}`);
}

//Callback que permite eliminar canción
const BorrarCancion = (req, res) => {
    const { id } = req.params;

    const productos = JSON.parse(fs.readFileSync(productosJSON));
    const index = productos.findIndex(p => p.id == id)
    const producto = productos[index];
    if (index === -1) {
        res.status(404).send(`Canción con id ${id} no encontrado.`);
        return;
    }
    productos.splice(index, 1);
    fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2));
    console.log(`Canción elminada de id: ${producto.id} titulo: ${producto.titulo} artista: ${producto.artista}`);
    res.status(200).send(`Canción elminada de id: ${producto.id} titulo: ${producto.titulo} artista: ${producto.artista}`);
}

//Callback que permite editar una canción
const editarCancion = (req, res) => {
    const { id } = req.params
    const producto = req.body
    const productos = JSON.parse(fs.readFileSync(productosJSON))
    const index = productos.findIndex(p => p.id == id)
    if (index === -1) {
        res.status(404).send(`Canción con id ${id} no encontrado.`);
        return;
    }
    productos[index] = producto
    fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2))
    console.log(`Producto de id: ${producto.id} titulo: ${producto.titulo} artista: ${producto.artista} modificado con éxito`);
    res.status(200).send("Producto modificado con éxito")
}

module.exports ={principal, leerCanciones, BorrarCancion, editarCancion, insertarCancion};