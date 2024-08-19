import logo1 from './Assests/slider1_1.png'
import logo2 from './Assests/slider1_2.png'
import logo3 from './Assests/slider1_3.png'
import logo4 from './Assests/slider1_4.png'
import logo5 from './Assests/slider1_5.png'
import logo6 from './Assests/slider1_6.png'
import logo7 from './Assests/slider1_7.png'
import logo8 from './Assests/slider1_8.png'
import logo9 from './Assests/slider1_9.png'
import logo10 from './Assests/slider1_10.png'
import logoback from "./Assests/backgroundLogo.webp"
import './CompanySlider.css'
import React, { useEffect } from 'react';


export function CompanySlider() {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,logo10];
  
    return (
      <div className="slider">
        {/* <img className="Img-back" src={logoback}/> */}
        
          
        <div className="list">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="item"
            >
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
       
      </div>
    );
  }