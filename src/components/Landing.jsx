import {Link} from 'react-router-dom';
import '../scss/Landing.scss';
import AllCard from 'AllCard';



function Landing({fake}) {
  return (
    <main className="container" >
      <h2 className="title" >Proyectos Molones</h2>
      <p className="container__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
      <Link className="create" to='/create'>Nuevo proyecto</Link> 
      <div> 
        <AllCard fake={fake} />
      </div>  
    </main>
    
    
  )
}

export default Landing;