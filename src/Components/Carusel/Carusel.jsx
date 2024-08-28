import Carousel from 'react-bootstrap/Carousel';
import "./Carusel.css"
import villa1 from './../../assets/image/villa1.jfif'
import villa2 from './../../assets/image/villa2.jpg'
import villa3 from './../../assets/image/villa3.jpg'
// import ss from "./../../assets/image"
function Carusel() {
  const heroData = [ 
    {
      id : 1 ,
      image : villa1 ,
      city : "Tornto,",
      state : "Canada",
      disc1 : "hurry!",
      disc : "get the best villa for you"
  
    },
    {
      id : 2 ,
      image : villa2 ,
      city : "melbourne,",
      state : "Australia",
    disc1 : "be quick!" ,
      disc :"get th best villa in town"
    },
    {
      id : 3 ,
      image : villa3,
      city : "Miami,",
      state : "South Florida",
    disc1 : "act now!",
      disc : "get the highest level penthouse"
    }
  ]
  return (
    <Carousel data-bs-theme>
      {
        heroData.map( hero => {
           return (
            <Carousel.Item key={hero.id}>
<div className="img">
            <img
              className="d-block w-100"
              src={hero.image}
              alt={"slide" + hero.id}
            />
            </div>
            <Carousel.Caption>
              <div className="caption">
                <p className='city'>{hero.city} <span className='state'>{hero.state}</span></p>
                <h1 className='disc'>{hero.disc1} <br/>{hero.disc}</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
           )
        })
      }
    </Carousel>
  );
}

export default Carusel;