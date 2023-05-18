# mi_repertorio

>"Tarea 2: Introducción a Express Js de DesafioLatam para el módulo: Backend con Node y Express (G27)"

## Características:

* El sistema corresponde a un programa que se ejecuta sobre Node js con Express en el puerto 3000, pero se pueden utilizar variables de entorno para definir el puerto.

* El programa contiene un archivo index.js en la carpeta src, el cual llama a distintas funciones para mostrar, agregar, actualizar y borrar canciones a través de procesos de backend en node.

* Se utiliza un archivo Json en la carpeta /public/data/repertorio.json  para almacenar los datos de las canciones agregadas.

* Se agregan en public las carpetas css e images para almacenar otros tipos de datos. 

* Notas:

    -Se realiza un ajuste en el style css para que el botón actualizar, solo se vea cuando se esté editando un registro.<br>
    -Se utiliza bootstrap y css para mejorar la estructura de la página.<br>
    -Se Agrega un función que bloquea todos los botones de eliminar, si se está realizando una edición de registro.<br>
    -Se configura la carpeta public a través del modulo path.<br>
    -Se almacena el css, los datos de repertorio.json, imágenes y el index.html en la carpeta public. <br>
    -Se utiliza una carpeta llamada controllers para almacenar las funciones que contienen los callbacks.<br>

* Luego de descargar instalar las dependencias y módulos necesarios a través de los comandos:
```
npm install
```
* Se ejecuta el programa a través de los comandos:
```
npm run start
```
* Para ejecutar el programa en modo de producción (sin debugging) se ejecutan los comandos:
```
npm run dev
```
## Acceso a deploy en web desde :

[https://mirepertorio-production.up.railway.app/](https://mirepertorio-production.up.railway.app/)

## Imágenes del deploy:

![https://github.com/Leonardo-villagran/mi_repertorio/blob/main/public/images/01.PNG](https://github.com/Leonardo-villagran/mi_repertorio/blob/main/public/images/01.PNG)

![https://github.com/Leonardo-villagran/mi_repertorio/blob/main/public/images/02.PNG](https://github.com/Leonardo-villagran/mi_repertorio/blob/main/public/images/02.PNG)
