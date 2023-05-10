import React from 'react'
import './footer.css'
import List from '../footer/List'
import socialicons from '../footer/socialicons'

const Footer = () => {
  return (
    <footer>
        <div className="footer__links">
          <ul>
            {
              List.map(item => (
                <li key={item.id}><a href={item.link}>{item.title}</a></li>
              ))
            }
          </ul>
        </div>

        <div className="footer__icons">
          {
            socialicons.map(item => (
              <a key={item.id} href={item.link}>{item.icon}</a>
            ))
          }
        </div>

        <p>2023 AAA Company, All Rights Reserved</p>
    </footer>
  )
}

export default Footer;