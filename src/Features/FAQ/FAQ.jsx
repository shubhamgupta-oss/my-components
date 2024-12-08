
import { useState } from 'react';
import './FAQ.css'

const Data = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live?",
      answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];


  
  const FAQ = () => {
    const [isClicked, setClicked] = useState(null);

    function handelClick(i){
        setClicked(isClicked === i ? null : i);
    }
    return (
        <div className="container">
          
            <div className='data-FAQ'>
            <h1>Frequently Asked Questions . . .</h1>
        {Data.map((item, index) => (
          <div className='single-FQA' key={index}>
            <div className='questionF'>
            <button onClick={()=>handelClick(index)} className={isClicked === index ? 'arrow' : ""}>▶️</button>
            <span>{item.question}</span>
            </div>
            <div className='ansF'>
                {
                    isClicked === index &&  <p>{item.answer}</p>
                }
            
          </div>
            
          </div>
         
        ))}
      </div>


        </div>
      
    );
  };
  
  export default FAQ;
  