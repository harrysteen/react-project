import React from 'react';
import video from '../../../assets/article.gif';
import './History.css'; // Assuming you have a separate CSS file for the History component styles
import video2 from '../../../assets/inside_the_blockchain.gif'

const History = () => {
  return (
    <>
    <div className='historymain'>


      <div className='video' style={{ backgroundImage: `url(${video})`, height: '900px' }}>

        <div className='Aimain'> 
        
        <h1>HISTORY OF AI</h1>

        <img src={video2} alt="ir"   width={300}/>

        <h1>A brief history of artificial intelligence</h1>

        <h3>Before 1949, computers could execute commands, but they could not remember what they did as they were not<br></br> 
        able to store these commands. In 1950, Alan Turing discussed how to build intelligent machines and test this<br></br> 
        intelligence in his paper “Computing Machinery and Intelligence”. Five years later, the first AI program was<br></br> 
        presented at the Dartmouth Summer Research Project on Artificial Intelligence (DSPRAI). This event was the<br></br>
         catalyst for AI research for the next few decades. Computers became faster, cheaper and more accessible<br></br>
          between 1957 and 1974. Machine learning algorithms improved and, in 1970, one of the hosts of DSPRAI told Life<br></br>
           Magazine that there would be a machine with the general intelligence of an average human being in three to<br></br>
            eight years.</h3>


        
        
        


            </div>
      </div>
     
    </div>
    </>
  );
}

export default History;
