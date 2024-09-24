
import autor from '../images/avatar.webp'


function CardPrewiev({info}) {
  return (
    <div>
      <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

          <div className="card__author">
            <div className="card__authorPhoto">
            <img className="card__authorPhoto" src={info.image || autor } alt="" />

            </div>
            <p className="card__job">{info.job || 'Full Stack Developer'}</p>
            <h3 className="card__name">{info.autor || 'Emmelie Björklund'}</h3> 
          </div>
      
          <div className="card__project">            
            <h3 className="card__name">{info.name || 'Elegant Workspace'}</h3>
            <p className="card__slogan">{info.slogan || 'Diseños Exclusivos'}</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">{info.desc ||'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Amet faucibus commodo tellus lectus lobortis. Ultricies lacus, facilisis arcu ac mauris, laoreet sit.'}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{info.technologies || 'React JS - HTML- CSS'}</p>
          
              <a className="icon" href={info.demo} title="Haz click para ver el proyecto online">
              <i className="fa-solid fa-globe emoji"></i>
              </a>
              <a className="icon" href={info.repo} title="Haz click para ver el código del proyecto"> <i className="fa-brands fa-github emoji"></i>
              </a>
            </div>
          </div>
        </article>    
    </div>
  )
}

export default CardPrewiev;