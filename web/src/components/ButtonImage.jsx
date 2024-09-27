import '../scss/ButtonImage.scss';
import React from 'react';


function ButtonImage(props){
    
        // creamos una propiedad de la clase que es la que vamos a usar en varios métodos para cargar la imagen
        // esto es un manejador de ficheros
        const fr = new FileReader();
      
        // creamos un React.createRef porque React no gestiona los <input type="file" /> por ello tenemos que gestionarlo por nuestra cuenta
        const myFileField = React.createRef();
        //  myFileField = document.querySelecto('input')
      
        const uploadImage = (ev) => {
            console.log("hi")
            console.log('La usuaria ha elegido los ficheros', ev.currentTarget.files);
    
          if (ev.currentTarget.files.length > 0) {
            
            const myFile = ev.currentTarget.files[0];
      
            fr.addEventListener('load', getImage);
      
            
            fr.readAsDataURL(myFile);
          }
        };
          
      
        const getImage = () => {
        
          const image = fr.result;
          props.updateAvatar(props.id,image);
        };






    return(
        <>
        <label  className="button"> {props.text} 
            <input      style={{ display: 'none' }}  type="file"
           ref={myFileField} 
           id={props.id} 
           onChange={uploadImage} />
        </label>
       
        </>
        
        
    )
}
 export default ButtonImage;