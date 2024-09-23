import ButtonImage from './ButtonImage';
import ButtonSave from './ButtonSave';
import '../scss/Form.scss';

/*function form(){
    return(
      
CREAR UN NUEVO COMPONENTE LLAMADO FORM
CREAR FUNCION changeForm
EN APP HAY QUE CAMBIAR LA FUNCION PARA QUE RECIBA EL EVENTO changeForm QUE TENEMOS QUE CREAR EN FORM, Y QUE SOLO RECIBA LA FUNCION EN APP EL ID Y EL VALUE PARA QUE HAGA LOS CONDICIONALES.
CAMBIAR NOMBRE DE LA FUNCION APP YA QUE DEJA DE HACER EL EVENTO .
    );
}
export default form;*/


function Form({changeForm, updateAvatar}) {
    const handleChangeForm = (event)=>{
        event.preventDefault();
        const id = event.target.id;
        const value = event.target.value;
        changeForm(id, value)
    } 
    
  return (
    <form className="addForm" onChange={handleChangeForm}>
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto"onChange={handleChangeForm}/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan"onChange={handleChangeForm}/>
          <div className="addForm__2col">
          <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio"onChange={handleChangeForm}/>
          <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo"onChange={handleChangeForm}/>
          </div>         
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías"onChange={handleChangeForm}/>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5"onChange={handleChangeForm}></textarea>
        </fieldset>
    
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre"onChange={handleChangeForm}/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"onChange={handleChangeForm}/>
        </fieldset>
    
        <fieldset className="addForm__group--upload">
          <ButtonImage  text="Subir foto del proyecto" id="photo" updateAvatar={updateAvatar} />
          <ButtonImage  text="Subir foto de la autora" id="image" updateAvatar={updateAvatar} />
          <ButtonSave />
        </fieldset>
        
      </form>
    
  )
}

export default Form;

