import React, { useState } from 'react';
import back from '../../../assets/t8.gif';
import './Traning2.css';  
import Timg1 from '../../../assets/t1.gif'
import Timg2 from '../../../assets/t2.gif'
import Timg3 from '../../../assets/t5.gif'
import Timg4 from '../../../assets/t6.gif'
import Timg5 from '../../../assets/t12.gif'
import Timg6 from '../../../assets/p3.jpg'
import video2 from '../../../assets/video1.mp4'
import ReactPlayer from 'react-player';
 

const Traning2 = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const toggleVideo = () => {
      setPlayVideo(!playVideo);
  };

    return (
        <div className='backgroundimage2' style={{ backgroundImage: `url(${back})`, backgroundPosition: 'center', height: '2000px' }}>
            <h1 style={{ color: 'white' }}>TRAINING</h1>

            <div className='Timg1'>
                <img src={Timg1} alt='Timg1' />
                <img src={Timg2} alt='Timg2' />
            </div>

            <div className='Timgf1'>
                <h2>figure-1</h2> {/* Fixed spelling */}
                <h2>figure-2</h2> {/* Fixed spelling */}
            </div>

            <div className='Timg2'>
                <img src={Timg3} alt='Timg3' style={{ height: '280px' }} />
                <img src={Timg4} alt='Timg4' />
            </div>

            <div className='Timgf2'>
                <h2>figure-3</h2> {/* Fixed spelling */}
                <h2>figure-4</h2> {/* Fixed spelling */}
            </div>

            <div className='Timg3'>
                <img src={Timg5} alt='Timg5' style={{ height: '280px' }} />
                <img src={Timg6} alt='Timg6' style={{ height: '320px' }} />
            </div>

            <div className='Timgf3'>
                <h2>figure-5</h2> {/* Fixed spelling */}
                <h2>figure-6</h2> {/* Fixed spelling */}
            </div>
        
            
        <div className='video'>
        <ReactPlayer
          url={video2}
          playing={playVideo}
           
          width="150%"
          height={"100%"}/>
      </div>
 

            
            
            <div className='startstop'>
        
        <button onClick={toggleVideo}>{playVideo ? 'Stop' : 'Start'}</button>
      </div>
   

            
        </div>



    );
}

export default Traning2;
