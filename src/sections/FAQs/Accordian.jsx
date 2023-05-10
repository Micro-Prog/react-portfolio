import React, { useState } from 'react'
import './accordion.css'

    const Accordion = ({ question, answer}) => {
        const [isActive, setIsActive] = useState(false);
        return (
            <div className="accordion">
                <div className="accordion-ques" onClick={() => setIsActive(!isActive)}>
                    <div>{isActive ? '-' : '+'}</div>
                    <div>{question}</div>
                </div>
                {isActive && <div className="accordion-answer">{answer}</div>}
            </div>
        )
    }

export default Accordion;