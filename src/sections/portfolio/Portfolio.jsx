import React from 'react'
import './portfolio.css'
import Data from '../../sections/portfolio/Data'
import Card from '../../components/Card'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on. Use the toggle buttons to toggle between projects.
      </p>
      <div className="toggle_btns">
        <a href='' >All</a>
        <a href=''>Backend</a>
        <a href=''>Frontend</a>
        <a href=''>UI/UX</a>
      </div>


      <div className="projects">
        {
          Data.map(item => (
            <Card key={item.id} className="projects__card">
              <img src={item.img} />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <div className="project__btns">
                <a href='#demo'>Demo</a>
                <a href='#Github'>Github</a>
              </div>
            </Card>
          ))
        }
      </div>


      
      </section>
    )
}

export default Portfolio;