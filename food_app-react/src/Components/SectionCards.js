import React from 'react'
import dish1 from "../images/dish-1.png"
import dish2 from "../images/dish-2.png"
import dish3 from "../images/dish-3.png"
import dish4 from "../images/dish-4.png"
import dish5 from "../images/dish-5.png"
import dish6 from "../images/dish-6.png"
function SectionCards() {
  return (
    <div>
{/* dishes section starts  */}
<section className="dishes" id="dishes">
  <h3 className="sub-heading"> Nossos Pratos </h3>
  <h1 className="heading"> Pratos Populares </h1>
  <div className="box-container">
    <div className="box">
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
      <img src={dish1} alt='dish1' />
      <h3>Hambúrguer</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span>$15.99</span>
      <a href="#" className="btn">Adicionar</a>
    </div>
    <div className="box">
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
      <img src={dish2} alt='dish2'   />
      <h3>Rissóis</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span>$15.99</span>
      <a href="#" className="btn">Adicionar</a>
    </div>
    <div className="box">
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
      <img src={dish3} alt="dish" />
      <h3>Frango</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span>$15.99</span>
      <a href="#" className="btn">Adicionar</a>
    </div>
    <div className="box">
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
      <img src={dish4} />
      <h3>Pizza</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span>$15.99</span>
      <a href="#" className="btn">Adicionar</a>
    </div>
    <div className="box">
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
      <img src={dish5}  />
      <h3>Cake</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span>$15.99</span>
      <a href="#" className="btn">Adicionar</a>
    </div>
    <div className="box">
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-eye" />
      <img src={dish6} />
      <h3>Dooh Ponto</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      <span>$15.99</span>
      <a href="#" className="btn">Adicionar</a>
    </div>
  </div>
</section>
{/* dishes section ends */}


    </div>
  )
}

export default SectionCards