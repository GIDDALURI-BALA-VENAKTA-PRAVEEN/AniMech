import './BackGround.css';

import { Header } from './Header';
import React from 'react'
import { fadeIn } from "../Test/Variants";
import { motion } from 'framer-motion';
import videos from '../About/Assests/video_2.mp4';

export function BackGround() 
{
    return(
        <>
          <div>
          <video className='background'  autoPlay loop muted>
            <source
              src={videos}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
     
        </div>
        <Header></Header>
        </>
    );
}

