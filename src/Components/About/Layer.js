import "./Layer.css";

import React from "react";
import { fadeIn } from "../Test/Variants";
import layer from "./Assests/layer.png";
import { motion } from 'framer-motion';

export function Layer() {
  return (
    <div className="ls">
      <motion.div 
      
      variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.2 }}
      className="grid-1">
        <div className="left">
          <img src={layer} alt="home" className="im"></img>
        </div>
        <div className="right">
          <p>
            To the more nitty-gritty details. Our customers are located all over
            the world and work in everything from architecture and interior
            design to industrial machines and life science instruments. What
            they all have in common is a complex product offering that is
            difficult to understand without smart visualization – solution
            Animech.
          </p>
          <br></br>

          <p>
            Our areas of expertise range from sensei-level in The Legend of
            Zelda to advanced moves on selected dance floors. Oh, and we also
            specialize in 3D visualization, UX & Design, and development.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
