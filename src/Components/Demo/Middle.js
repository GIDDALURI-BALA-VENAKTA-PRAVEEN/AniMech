import './Middle.css';

import React from "react";
import { fadeIn } from "../Test/Variants";
import { motion } from 'framer-motion';

export function Middle() {
  return (
    <div 
   
    
    className="back">
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      
      className="grids">
        
        <div className="cols">
          <p className="DemoText">
            Animech offers an unprecedented opportunity to transform the way
            your customers experience and interact with your products online.
            Through advanced real-time 3D visualization technology, we open the
            doors to a world where customization and detail go hand in hand,
            right in your browser.
          </p>
        </div>

        
        <div className="form-container">
          <form>
            
            <div className="form-group">
              <div className="name-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" className="full-width first-name" />
              </div>
              <div className="name-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" className="full-width last-name" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="full-width" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Company Name</label>
              <input type="email" id="email" className="full-width" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Cell PhoneNumber</label>
              <input type="email" id="email"  className="full-width" />
            </div>
            <div className="form-group">
              <button type="submit" className="Demo-btn">Register</button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
