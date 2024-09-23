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
      <Route path="/" element={<Landing />}/>
      <Route path="/create" element={
        <main className="main">
          <SectionProject />
          <Card form={form}/>
          {/*<Form />*/} 
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



