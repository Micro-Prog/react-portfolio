import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./carousel.css";
import Data from './Data'
import Card from './Card'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarouselTemplate() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Let's Read What Our Clients Say About Us</h1>
      <div className="CarouselTemplate">
        <Carousel breakPoints={breakPoints}>
          {
            Data.map(item => (
              <Card key={item.key} className="carousel light">
                <p>{item.desc}</p>
                <div className="persons">
                  <img src={item.img} />
                  <span>
                    <h5>{item.title}</h5>
                    <h6>{item.jobtype}</h6>
                  </span>
                </div>
              </Card>
            ))
          }

        </Carousel>
      </div>
    </>
  );
}

export default CarouselTemplate;