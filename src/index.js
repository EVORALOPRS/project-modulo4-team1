const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2/promise');


//crear servidor
const server= express()
//habilito el servidor para poder hacerle peticiones externas con CORS
server.use(cors())
server.use(express.json({limit:"100mb"}));
server.set('view engine', 'ejs'); //importamos ejs
//definir el puerto de conexión
const port= 5001;
server.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
});
//Nos conectamos con la BD
async function getConnectionDB(){
  try {
    const conect = await mysql.createConnection({
      host:"sql.freedb.tech",
      user:"freedb_adminMolones",
      password:"C#vRufYx9sRjG*y",
      database:"freedb_ProjetMolones",
    });
    conect.connect();
    return conect;
  } catch (error) {
    console.log(error);
  }
  
}




//http://localhost:5001/docs/document.pdf  --> ver el documento PDF

//manejar errores de rutas que no existen

// ENDPOINT DE LA LANDING]
server.get("/project", async (req, res)=>{
    //Buscar en una base de datos con un SELECT
    const conex = await getConnectionDB();
    const sql = 'SELECT * FROM `dataproject` JOIN `dataautor` ON dataproject.fk_autor= dataautor.idAutor;';
    const [result] = await conex.query(sql);
    await conex.end();
   
    if(result.length === 0){
        res.status(404).sendFile(path.join(__dirname, '../web/not-found.html'));
    } else {
        res.status(202).json({
          success:true,
          message: result
        });
    }  
});


//ENDPOINT DEL FORMULARIO(BUTTON SAVE)

// modificamos el post anterior de los datos fakes, utilizando los parametros.


server.post("/add", async(req,res) =>{
    const body= req.body;
    const conex= await getConnectionDB();
    //1. Insertamos los datos de la autora para que nos genere el ID ultimo que se genere
    const sql= "INSERT INTO `dataautor` (`autor`,`job`,`image`) values (?,?,?);"
   
    const [result]= await conex.query( sql, [
      body.autor,
      body.job,
      body.image
    ]);
    //2. Creamos una variable para guardar el id ultimo de la autora llamado insertId
    const fkAutor = result.insertId;
    //3. Insertamos en la tabla project con los datos junto a la columna fk_autor que relaciona con la tabla de dataautor
   const sqlproject= "INSERT INTO `dataproject` (`name`, `slogan`,`technologies`, `repo`,`demo`,`desc`,`photo`,`fk_autor`) values ( ?,?,?,?,?,?,?,?);"
   //4.El ultimo parametro será la constante creada anteriormente con el iddel Autor 
   const [resultProject]= await conex.query(sqlproject,[
    body.name,
    body.slogan,
    body.technologies,
    body.repo,
    body.demo,
    body.desc,
    body.photo,
    fkAutor
   ]);
    
   //5. Enviamos el result con la clave-valor a button-save con la url creada que nos lleva al proyecto de esa autora en concreto
    
    res.json({cardURL:`//localhost:5001/oneproject/${resultProject.insertId}`, success:true});
     
});
//hacer el endpoint de servidor dinamico

server.get("/oneproject/:idPro", async (req, res)=>{
  const conex= await getConnectionDB();
  const idProject= req.params.idPro;
  const sql= "SELECT * FROM `dataproject` JOIN `dataautor` ON dataproject.fk_autor= dataautor.idAutor where idProject=?";
  const [result]= await conex.query(sql, [idProject]);
  conex.end();
  console.log(result);
  res.render("finalCard", {finalProject: result[0]} );
});

//hacer el endpoint de eliminar tarjetas

server.delete("/delete/:idProject/:idAutor", async (req, res)=>{
  const conex= await getConnectionDB();
  const idProject = req.params.idProject;
  const idAutor= req.params.idAutor;
  const sqlDelete= "delete from `dataproject` where idProject=? ";
  const [resultProject]= await conex.query(sqlDelete, [idProject]);
  const sqlDeleteAutor= "delete from `dataautor` where idAutor=?";
  const [resultAutor]= await conex.query (sqlDeleteAutor, [idAutor]);
  conex.end();
  
  res.status(200).json({succes: true, message: "El proyecto se ha eliminado correctamente"});

})

//servidores de estaticos, quiero que se me renderice lo que tengo en mi index

//1. guardar la ruta de lo que quiero que se me renderice y 2. accede a la ruta de la / con una funcion que ya existe en express
const staticServerpath= './src/public-react';
server.use(express.static(staticServerpath));


const staticServerCss= './src/css';
server.use(express.static(staticServerCss));

