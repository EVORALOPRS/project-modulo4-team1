



function AllCard({fake}) {
  return (
    <div>
        <section className="preview">
       
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

          <div className="card__author">
            <div className="card__authorPhoto">
            <img className="card__authorPhoto" src={fake.autor } alt="" />

            </div>
            <p className="card__job">{fake.job}</p>
            <h3 className="card__name">{fake.autor}</h3> 
          </div>
      
          <div className="card__project">            
            <h3 className="card__name">{fake.name}</h3>
            <p className="card__slogan">{fake.slogan}</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">{fake.desc}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{fake.technologies}</p>
          
              <a className="icon" href={fake.demo} title="Haz click para ver el proyecto online">
              <i className="fa-solid fa-globe emoji"></i>
              </a>
              <a className="icon" href={fake.repo} title="Haz click para ver el código del proyecto"> <i className="fa-brands fa-github emoji"></i>
              </a>
            </div>
          </div>
        </article> 
      </section>

        
    </div>
  )
}

export default AllCard;