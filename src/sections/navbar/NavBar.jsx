import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.svg'
import List from './List'
import {IoIosAddCircle} from 'react-icons/io'

const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="" />
        </a>
        <ul className="nav__menu">
           {
            List.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
           } 
        </ul>
        <button id="theme__icon"><IoIosAddCircle /></button>
      </div>
    </nav>
  )
}

export default NavBar;