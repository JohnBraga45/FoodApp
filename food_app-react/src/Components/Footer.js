import React from 'react'

function Footer(){
return(
    <div>
{/* footer section starts  */}
<section className="footer">
  <div className="box-container">
    
    <div className="box">
      <h3>quick links</h3>
      <a href="#">home</a>
      <a href="#">dishes</a>
      <a href="#">about</a>
      <a href="#">menu</a>
      <a href="#">reivew</a>
      <a href="#">order</a>
    </div>
    <div className="box">
      <h3>contact info</h3>
    
    </div>
    <div className="box">
      <h3>follow us</h3>
      <a href="#">facebook</a>
      <a href="#">twitter</a>
      <a href="#">instagram</a>
      <a href="#">linkedin</a>
    </div>
  </div>
  <div className="credit"> copyright @ 2022 by <span>Dionísio Braga</span> </div>
</section>
{/* footer section ends */}

    </div>
)
}
export default Footer