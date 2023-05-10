import React, { useState } from 'react'
import './faqs.css'
import Data from './Data'
import Accordion from './Accordian'


const FAQs = () => {
  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      {
        Data.map((item) => (
          <Accordion key={item.id} question={item.question} answer={item.answer} />
        ))
      }
    </div>
  )
}

export default FAQs;