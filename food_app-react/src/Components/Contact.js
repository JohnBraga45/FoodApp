import React from 'react'

function Contact(){
    return(
        <div>
{/* order section starts  */}
<section className="order" id="order">
  <h3 className="sub-heading"> Pedir Agora </h3>
  <h1 className="heading"> Grátis e Rápido </h1>
  <form action>
    <div className="inputBox">
      <div className="input">
        <span>Seu nome</span>
        <input type="text" placeholder="Insira o seu nome" />
      </div>
      <div className="input">
        <span>Seu número</span>
        <input type="number" placeholder="Insira o seu número" />
      </div>
    </div>
    <div className="inputBox">
      <div className="input">
        <span>Seu pedido</span>
        <input type="text" placeholder="Insira o seu pedido" />
      </div>
      <div className="input">
        <span>Comida adicional</span>
        <input type="test" placeholder="extra " />
      </div>
    </div>
    <div className="inputBox">
      <div className="input">
        <span>Quantidade</span>
        <input type="number" placeholder="Quantidade de pedidos" />
      </div>
      <div className="input">
        <span>Data e hora</span>
        <input type="datetime-local" />
      </div>
    </div>
    
    <input type="submit" defaultValue="order now" className="btn" />
  </form>
</section>
{/* order section ends */}

        </div>
    )
}
export default Contact