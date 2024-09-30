const express = require('express');
const cors = require('cors');
const path = require('path');

//crear servidor
const server= express()


//habilito el servidor para poder hacerle peticiones externas con CORS
server.use(cors())
server.use(express.json({limit:"20mb"}))
//definir el puerto de conexión
const port= 5001;
server.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
});

//servidores de estaticos, quiero que se me renderice lo que tengo en mi index

//1. guardar la ruta de lo que quiero que se me renderice y 2. accede a la ruta de la / con una funcion que ya existe en express
const staticServerpath= './web/docs';
server.use(express.static(staticServerpath));

//http://localhost:5001/docs/document.pdf  --> ver el documento PDF

//manejar errores de rutas que no existen
const fake = [
    {
    name:"Elegant Workspace",
    slogan:"Diseños Exclusivos",
    repo:"",
    demo:"",
    technologies:"React JS - HTML- CSS",
    desc:"Product Description Lorem ipsum dolor sit amet, consecteturadipiscing elit. Amet faucibus commodotellus lectus lobortis. Ultricies lacus, facilisisarcu ac mauris, laoreet sit.",
    autor:"Emmelie Björklund",
    job:"Full Stack Developer",
    photo: "",
    },
    {
      name:"Elegant Workspace",
      slogan:"Diseños Exclusivos",
      repo:"",
      demo:"",
      technologies:"React JS - HTML- CSS",
      desc:"Product Description Lorem ipsum dolor sit amet, consecteturadipiscing elit. Amet faucibus commodotellus lectus lobortis. Ultricies lacus, facilisisarcu ac mauris, laoreet sit.",
      autor:"Emmelie Björklund",
      job:"Full Stack Developer",
      photo: "",
    },
    {
      name:"Elegant Workspace",
      slogan:"Diseños Exclusivos",
      repo:"",
      demo:"",
      technologies:"React JS - HTML- CSS",
      desc:"Product Description Lorem ipsum dolor sit amet, consecteturadipiscing elit. Amet faucibus commodotellus lectus lobortis. Ultricies lacus, facilisisarcu ac mauris, laoreet sit.",
      autor:"Emmelie Björklund",
      job:"Full Stack Developer",
      photo: "",
    },
    {
      name:"Elegant Workspace",
      slogan:"Diseños Exclusivos",
      repo:"",
      demo:"",
      technologies:"React JS - HTML- CSS",
      desc:"Product Description Lorem ipsum dolor sit amet, consecteturadipiscing elit. Amet faucibus commodotellus lectus lobortis. Ultricies lacus, facilisisarcu ac mauris, laoreet sit.",
      autor:"Emmelie Björklund",
      job:"Full Stack Developer",
      photo: "",
    },
   
  ];

// ENDPOINT DE LA LANDING
server.get("/proyect", (req, res)=>{
    //Buscar en una base de datos con un SELECT
    
    if(fake.length === 0){
        res.status(404).sendFile(path.join(__dirname, '../web/not-found.html'));
    } else {
        res.status(202).json(fake)
    }
    
});


//ENDPOINT DEL FORMULARIO(BUTTON SAVE)
server.post("/add",(req,res) =>{
    const newProyect = req.body //Aqui esta lo que escribe el usuario
    fake.push(newProyect); //guardamos en el array los datos del usuario, estos datos se alamacenaran en la BD (aquí tenemos que hacer un SELECT(SQL)).
    res.json({cardURL:"//localhost:5001/123", success:true});// Esta será la ruta del proyecto que nos pintara la tarjeta. 

   
});

