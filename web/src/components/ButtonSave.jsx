import '../scss/ButtonSave.scss';

function ButtonSave ({form, setUrl}){ 
    const handleClick = (ev) => {
        ev.preventDefault();
        fetch ("//localhost:5001/add", {
            method: "POST",
            headers: {"Content-Type":"application/json" }, //EL LENGUAJE DE COMUNICACIÓN ENTRE FRONT Y BACK VA A SER APLICACIÓN/JSON
            body: JSON.stringify(form)
        })
        .then(response=>response.json())
        .then((data)=>{
            setUrl(data.cardURL)
        })
    }
    return(
        
            <button className="button--large" onClick={handleClick}>Guardar proyecto</button>
    
        
    );
};

export default ButtonSave;