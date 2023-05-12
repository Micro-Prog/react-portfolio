import React from 'react'
import './contact.css'
import Data from './Data'

const Contact = () => {
  return (
    <section id="contact">
     
      <h2>Get in Touch</h2>
      <p>Send Me a Message.</p>
      
      <div className="contact__icons">
        {
          Data.map(item => (
            <a key={item.id} href={item.link}>{item.icon}</a>
          ))
        }
      </div>

    </section>
  )
}

export default Contact;