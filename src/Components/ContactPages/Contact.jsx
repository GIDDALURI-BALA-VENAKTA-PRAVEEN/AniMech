import './Contact.css';

import  { Hero } from './Hero';
import video from './video_2.mp4'

export function Contact()
{
    return(
      <>
        <div>
        <video className='background'  autoPlay loop muted>
          <source
            src={video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
       <Hero></Hero>
      </div>
      
      </>
    )
}