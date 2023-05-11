const fs = require('fs')
const path = require('path');

//acceso a ruta del json
const productosJSON = path.join(__dirname, '../../public/data/repertorio.json');
const home = path.join(__dirname,"../../public/index.html");

const principal = (req, res) => {
    res.sendFile(home);
};

const leerCanciones = (req, res) => {
    const productos = JSON.parse(fs.readFileSync(productosJSON))
    res.json(productos)

}

const insertarCancion = (req, res) => {

    const producto = req.body;
    const { id, nombre, precio } = req.body;
    const productos = JSON.parse(fs.readFileSync(productosJSON))
    productos.push(producto);
    fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2));
    res.send(`Producto entregado de nombre de id: ${id} por nombre: ${nombre} y precio: ${precio}`);
}

const BorrarCancion = (req, res) => {
    const { id } = req.params;

    const productos = JSON.parse(fs.readFileSync(productosJSON));
    const index = productos.findIndex(p => p.id == id)
    const producto = productos[index];
    if (index === -1) {
        res.status(404).send(`Producto con id ${id} no encontrado.`);
        return;
    }
    productos.splice(index, 1);
    fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2));
    res.send(`Producto elminado de id: ${producto.id} nombre: ${producto.nombre} precio: ${producto.precio}`);
}

const editarCancion = (req, res) => {
    const { id } = req.params
    const producto = req.body
    const productos = JSON.parse(fs.readFileSync(productosJSON))
    const index = productos.findIndex(p => p.id == id)
    if (index === -1) {
        res.status(404).send(`Producto con id ${id} no encontrado.`);
        return;
    }
    productos[index] = producto
    fs.writeFileSync(productosJSON, JSON.stringify(productos, null, 2))
    res.send("Producto modificado con éxito")
}

module.exports ={principal, leerCanciones, BorrarCancion, editarCancion, insertarCancion};