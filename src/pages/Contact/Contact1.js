import React from "react";
import background from '../../assets/t22.gif';
import './Contact.css'

function Contact1() {
    return (
        <div className="Contactmain" style={{ backgroundImage: `url(${background})` ,height:'650px' }}>

            <h1>CONTACT US</h1>


            <div className="input1">  

            <h3>NAME</h3>
            <input type="text" placeholder="Enter your name"></input>
            </div>


            <div className="input2">  

<h3>EMAIL</h3>
<input type="email" placeholder="Enter your email"></input>
</div>


<div className="input3">  

<h3>CONTACT</h3>
<input type="text" placeholder="Enter your number"></input>
</div>


<div className="submit">  


 <button>submit</button>
</div>
            
        </div>
    );
}

export default Contact1;
