import "./Header.css";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import { fadeIn } from "../Test/Variants";
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.2 }}
    
    className="heros">
   

      <div className="texts">
        <h3>This is us .</h3>
        <p>We help people make better decisions</p>
      </div>
      <div className="explores">
        <span className="ic">
          <i class="bi bi-arrow-down"></i>
        </span>
      </div>
    </motion.div>
  );
}
