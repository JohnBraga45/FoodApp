import React from 'react'

function Header() {
  return (
   
<div>
  {/* header section starts      */}
  <header>
    <a href="#" className="logo"><i className="fas fa-utensils" />Braga.</a>
    <nav className="navbar">
      <a className="active" href="#home">home</a>
      <a href="#dishes">Pratos</a>
      <a href="#about">Sobre</a>
      
      <a href="#order">Pedir</a>
    </nav>
    <div className="icons">
      <i className="fas fa-bars" id="menu-bars" />
      <i className="fas fa-search" id="search-icon" />
      <a href="#" className="fas fa-heart" />
      <a href="#" className="fas fa-shopping-cart" />
    </div>
  </header>
  {/* header section ends*/}
  {/* search form  */}
  <form action id="search-form">
    <input type="search" placeholder="search here..." name id="search-box" />
    <label htmlFor="search-box" className="fas fa-search" />
    <i className="fas fa-times" id="close" />
  </form>

  {'}'}
</div>
  )}

export default Header