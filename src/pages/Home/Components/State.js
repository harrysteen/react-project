 import {useState} from'react';
import './State.css';
import img1 from '../../../assets/facescan.gif';
import img2 from '../../../assets/faceman.gif';

const State = () => {
 
  const [state,setstate] =useState(false);

  const toggel=()=>{

    setstate(!state);
  }


  return (
    <div className='statemain'>
      <div className='statesub-main'>
        <h1>ARTIFICIAL INTELLIGENCE</h1>
      </div>


      <div className='statesub2-main2'>

        {

          state ? (<img src={img1} alt='img1'></img>) :   (<img src={img2} alt='img2'></img>)
        }
        

        </div >

        <div onClick={toggel} className='statebtn'>
          {

          state ? (<button className='startButton'>start</button>) : (<button className='doneButton'> don</button>)

        }
        </div>
         
      
    </div>
  );
};

export default State;
