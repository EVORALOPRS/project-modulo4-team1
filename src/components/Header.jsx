import laptop from '../images/laptop-code-solid.svg';
import adalab from '../images/adalab.png';
import '../scss/Header.scss';




function Header(){
    return(
        <header className="header">
      <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
        <img className="header__companyLogo" src={laptop} alt="Logo proyectos molones"/>
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <img className="logoSponsor" src={adalab} alt="Logo Adalab"/>
    </header>


    )
}

export default Header;