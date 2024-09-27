import '../scss/App.scss';
import Header from './Header';
import SectionProject from './SectionProject';
import Card from './Card';
//import Form from './Form';
import Footer from './Footer';
import Form from './Form';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Landing from './Landing';
import autor from '../images/avatar.webp'

/* PARA LA SEMANA QUE VIENE
1- Cuantas peticiones vamos a realizar y donde se van a realizar:

-->  Fetch para datos subir con POST cada vez que se genere la URL cuando pulsemos el boton de "guardar proyecto" (pagina de la tarjeta creada).
--> Fetcht pedir los datos almacenado en la API con GET (pagina formulario)
se visualice todos los proyectos en la pagina principal(LADING), usaremos un USE EFFECT realizando una función y usando el método funcional de map. 
*/

function App() {
  //estados de los inputs
  const [form, setForm]= useState({
    name:"",
    slogan:"",
    repo:"",
    demo:"",
    technologies:"",
    desc:"",
    autor:"",
    job:"",
    image:"",
    photo:"",
  })

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
    photo: autor,
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
      photo: autor,
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
      photo: autor,
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
      photo: autor,
    },
   
  ];
  
  const [url, setUrl] = useState("")



  // esta funcion modifica la imagen y la foto. Para ello ponemos la prop key entre [] y así modificamos tanto la img como la foto
  const updateAvatar = (key, value) => {
    setForm({...form, [key]:value});
  };
  // const getUrl = (value) => {
  //   setUrl(value)
  // }

// este es un evento que pasaremos por prop al componente de Form
  const changeForm = (id, value)=>{
    console.log(id);
    if (id === 'name'){
      setForm({...form,name:value});
    } else if (id === 'slogan'){
      setForm({...form,slogan:value});
    } else if (id === 'repo'){
      setForm({...form,repo:value});
    } else if (id === 'demo'){
      setForm({...form,demo:value});
    } else if (id === 'technologies'){
      setForm({...form,technologies:value});
    } else if (id === 'desc'){
      setForm({...form,desc:value});
    } else if (id === 'autor'){
      setForm({...form,autor:value});
    } else if (id === 'job'){
      setForm({...form,job:value});
    }
  }

  return (
    <div className="container">
      <Header /> 
    <Routes>
      <Route path="/" element={<Landing fake={fake}/>}/>
      <Route path="/create" element={
        <main className="main">
          <SectionProject />
          <Card data={form}/>
          <Form 
          changeForm={changeForm} 
          updateAvatar={updateAvatar}
          form={form}
          setUrl={setUrl}
          url={url}/>
        </main> 
      } />
    </Routes>
    <Footer />
    </div> 
   
  )
}

export default App;



