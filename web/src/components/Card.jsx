import '../scss/Card.scss';
import ebook from '../images/ebook-example.jpg'
import CardPrewiev from './CardPrewiev';

function Card({data}){

    return(
      <section className="preview">
        <div className="projectImage">
          <img className="projectImage__ebook" src={data.photo || ebook } alt="" />
        </div>
        <CardPrewiev info={data}/>
      </section>


    )
}
export default Card;