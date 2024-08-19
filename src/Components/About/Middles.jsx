import "./Middles.css";

import Home from "./Assests/house.jpg";
import React from "react";
import { fadeIn } from "../Test/Variants";
import { motion } from 'framer-motion';

export function Middles() {
  return (
    <div className="fs">
      <motion.div 

      variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.2 }}
      className="grid-1">
        <div className="left">
          <img src={Home} alt="home" className="im"></img>
        </div>
        <div className="right">
          <h1>Animech, anyone?<br></br> Anywho... Here we go!</h1>

          <p>
            First, we are not a company, we are the sum of every individual
            working here. Our team is what makes us what we are – and they are
            all nothing short of wizards and magicians who do all the crazy
            things we make possible. So let’s take a short break here and bow to
            all the kind, smart and unique geniuses who work here.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
