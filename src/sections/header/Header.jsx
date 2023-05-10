import React from 'react'
import './header.css' 
import HeaderImage from '../../assets/header2.jpg'
import socialicons from './socialicons'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="header-image" />
        </div>
        <h3>Alina Johnson</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat aut laboriosam voluptatibus dolorem totam ab, quibusdam dignissimos nihil, itaque, magnam aperiam suscipit pariatur perferendis molestias quam incidunt praesentium quaerat. Deserunt.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a href="#portfolio" className="btn light">My Portfolio</a>
        </div>
        <div className="header__socialicons">
          {
            socialicons.map(item => <a key={item.id} href={item.link} target="_blank" 
            rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header;