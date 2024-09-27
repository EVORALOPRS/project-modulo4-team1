const express = require('express');
const cors = require('cors');
const path = require('path');

//crear servidor
const server= express()


//habilito el servidor para poder hacerle peticiones externas con CORS
server.use(cors())

//definir el puerto de conexión
const port= 5001;
server.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
});

//servidores de estaticos, quiero que se me renderice lo que tengo en mi index

//1. guardar la ruta de lo que quiero que se me renderice y 2. accede a la ruta de la / con una funcion que ya existe en express
const staticServerpath= './web';
server.use(express.static(staticServerpath));

//http://localhost:5001/docs/document.pdf  --> ver el documento PDF

//manejar errores de rutas que no existen

server.get("*", (req, res)=>{

    res.status(404).sendFile(path.join(__dirname, '../web/not-found.html'));
});


