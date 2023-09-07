import React from 'react';
import img from '../../../assets/AI_gif.gif';
import './introduction.css'

const Introduction = () => {
  return (
    <div className='main'>


      <div className='AI'>  
        <img src={img} alt='kk' />
      </div>


      <div className='sub-main'> 


      <div className='matter1'>

        <h1>Introduction of AI</h1>
        <h3>Artificial intelligence allows machines to replicate the capabilities<br></br>
             of the human mind. From the development of self-driving cars to <br></br>
             the proliferation of smart assistants like Siri and Alexa, AI is a <br></br>
             growing part of everyday life. As a result, many tech companies<br></br>
              across various industries are investing in artificially intelligent<br></br>
               technologies.</h3>
      </div>


      <div className='matter2'>
        <h1>WHAT IS ARTIFICIAL INTELLIGENCE</h1>
        <h3>Artificial intelligence is a wide-ranging branch of computer <br></br>
        science concerned with building smart machines capable of <br></br>
        performing tasks that typically require human intelligence.</h3>
      </div>

      </div>
    </div>
  );
}

export default Introduction;
