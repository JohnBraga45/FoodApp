import React from 'react'
 import about from '../images/home-img-1.png'


function Banner() {
  return (
    <div>
    
{/* home section starts  */}
<section className="home" id="home">
  <div className="swiper-container home-slider">
    <div className="swiper-wrapper wrapper">
      <div className="swiper-slide slide">
        <div className="content">
          <span>Nossos pratos preferidos</span>
          <h3>Macarrão picante</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
          <a href="#" className="btn">Encomendar</a>
        </div>
        <div className="image">
          <img src={about} alt='dish'/>
        </div>
      </div>
       
       
    </div>
    <div className="swiper-pagination" />
  </div>
</section>
{/* home section ends */}

    
    
    </div>
  )
}

export default Banner