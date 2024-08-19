import "./Hero.css";

import React from "react";
import arrow from "../ContactPages/arrow_btn.png";
import { fadeIn } from "../Test/Variants";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="hero"
    >
      <div className="text">
        <h3>Contact Animech .</h3>
        <p>
          Create, review and send quotes in minutes. Ensure correct pricing
          using guided sales flows and discount<br></br> rules. Avoid errors and
          reduce risks through built-in controls, approval flows and signatures
          in the quotation<br></br> process.
        </p>
      </div>
      <div className="explore">
        <p>Register Demo</p>
        <img src={arrow}></img>
      </div>
    </motion.div>
  );
}
