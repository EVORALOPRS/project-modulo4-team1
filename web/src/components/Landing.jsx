import {Link} from 'react-router-dom';
import '../scss/Landing.scss';
import CardPrewiev from './CardPrewiev';
import { useEffect, useState } from 'react';



function Landing() {
/* Hacemos una variable de estado para recoger los datos que necesitamos */

 const [dataFake, setDataFake] = useState([]);

  useEffect(()=>{
    fetch ("//localhost:5001/proyect")
    .then(reponse =>reponse.json())
    .then((data)=>{
      //console.log(dataFake)
      setDataFake(data);
    })
  },[]);

   const infoFake = dataFake.map((item,i)=><CardPrewiev key={i}info={item}/>)
  
  

  return (
    <main className="container-main" >
      <div className='container-div'>
        <h2 className="title" >Proyectos Molones</h2>
        <p className="container__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <Link className="create" to='/create'>Nuevo proyecto</Link>
      </div>
      <div className="cardprewiev"> 
       {infoFake} 
      </div>  
    </main>
    
    
  )
}  
export default Landing;