import React from 'react'
import './services.css'
import Data from './ServicesData'
import Card from '../../components/Card'

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <p>Get the Best in Class Services</p>
      <div className="container services__container">
        {
        Data.map(item => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))
        }
      </div>
      </section>
    )
}

export default Services;