import React, { useState } from 'react'
import './faqs.css'
import Data from './Data'
import Card from '../../components/Card'
import { MdAdd } from "react-icons/md"
import { BiMinusCircle } from 'react-icons/bi'


const FAQs = () => {

  return (
    <section id="faqs">
      
      <h2>FAQs</h2>
      <p>Click on the Questions to Know the Answers.</p>
      
      <div className="faq-accordian">
        {
          Data.map(item => (
            <Card key={item.id} className="faqs-card">
                <div className="ques-ans-div">
                  <MdAdd />
                  <p>{item.question}</p>
                   <p>{item.answer}</p>
                </div>
             </Card>
          ))
        }
      </div>
  
  
  
    </section>
    )
}

export default FAQs;