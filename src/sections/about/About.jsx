import React from 'react'
import './about.css'
import CV from '../../assets/cv.pdf'
import AboutImage from '../../assets/about.jpg'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import Data from '../../sections/about/CardData'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              Data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates temporibus repellendus enim? Repellendus molestiae autem, illo consectetur saepe nisi eligendi? Hic sapiente saepe, deserunt magni enim nostrum suscipit ut.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, suscipit doloribus! Maiores, voluptatibus voluptate laborum, sint, debitis blanditiis enim sunt recusandae vero modi dicta. Illo quos iusto neque porro facilis.
          </p>
          <a href={CV} download className="btn primary">Download Here<HiDownload /></a>
        </div>
      </div>
    </section>
    )
}

export default About;