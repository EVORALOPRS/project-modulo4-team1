import {Link} from 'react-router-dom';
import '../scss/Landing.scss';
import CardPrewiev from './CardPrewiev';
import { useEffect, useState } from 'react';



function Landing() {
/* Hacemos una variable de estado para recoger los datos que necesitamos */

 const [dataFake, setDataFake] = useState([]);
 const [idDelete, setIdDelete] = useState (null);

  useEffect(()=>{
    fetch ("https://proyectos-molones-slg0.onrender.com/project")
    .then(reponse =>reponse.json())
    .then((data)=>{
      //console.log(dataFake)
      setDataFake(data.message);
    })
  },[idDelete]);
    // Preguntar a Dayana donde esta el error, y porque no se nos pinta. 
   const infoFake = dataFake.map((item,i)=><CardPrewiev deleteProject={true} key={i} info={item} setIdDelete={setIdDelete}/>)
  
  

  return (
    <main className="container-main" >
      <div className='container-div'>
        <h2 className="title" >Proyectos Molones</h2>
        <p className="container__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <Link className="create" to='/create'>Nuevo proyecto</Link>
      </div>
      <div className="cardprewiev" > 
       {infoFake} 
      </div>  
    </main>
    
    
  )
}  
export default Landing;