import React from 'react'
import about from '../images/about-img.png'
function CardImg(){
    return(
        <>

{/* about section starts  */}
<section className="about" id="about">
  <h3 className="sub-heading"> Sobre Nós </h3>
  <h1 className="heading"> Por quê nos escolher? </h1>
  <div className="row">
    <div className="image">
      <img src={about} alt />
    </div>
    <div className="content">
      <h3>Melhor comida no País</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
      
      <a href="#" className="btn">Saber Mais</a>
    </div>
  </div>
</section>
{/* about section ends */}


        </>
    )
}
export default CardImg