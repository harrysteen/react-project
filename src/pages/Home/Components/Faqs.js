import React, { useState } from "react";
import './Faqs.css'
import arrow from '../../../assets/arrow.jpg'

function Faqs(){

    const [expandedFaq, setExpandedFaq] = useState(null);

    const handleFaqClick = (faqNumber) => {
        if (expandedFaq === faqNumber) {
            setExpandedFaq(null); // Close the FAQ if it's already open
        } else {
            setExpandedFaq(faqNumber);
        }
    }

    return(

        <div className="faqsmain">

            <div className="faqs-1">
                <h1>FAQs</h1>
            </div>

            <div className={`faqs-2 ${expandedFaq === 2 ? 'expanded' : ''}`} onClick={() => handleFaqClick(2)}>
                <h1>1. What is an AI?</h1>   <img src={arrow} alt="arrow"  width={50} height={60}></img>

                {expandedFaq === 2 && (
                    <div className="faq-content-1">
                        
                        <p>Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are capable of learning, reasoning, and problem-solving.</p>
                    </div>
                )}

            </div>

            <div className={`faqs-3 ${expandedFaq === 3 ? 'expanded' : ''}`} onClick={() => handleFaqClick(3)}>
                <h1>2. Why do we need AI?</h1>   <img src={arrow} alt="arrow"  width={50} height={60}></img>

                {expandedFaq === 3 && (
                    <div className="faq-content-1">
                        
                        <p>Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are capable of learning, reasoning, and problem-solving.</p>
                    </div>
                )}
                
            </div>

            <div className={`faqs-4 ${expandedFaq === 4 ? 'expanded' : ''}`} onClick={() => handleFaqClick(4)}>
                <h1>3. How is ML related to AI?</h1>    <img src={arrow} alt="arrow"  width={50} height={60}></img>
           
                {expandedFaq === 4 && (
                    <div className="faq-content-1">
                        
                        <p>Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are capable of learning, reasoning, and problem-solving.</p>
                    </div>
                )}
            </div>



            <div className="footer">

                <h1>How can we help ?</h1>


                <input type="text" placeholder="Help me find something"></input>


                <button>search</button>
            </div>

        </div>
    )
}
export default Faqs;
