import "./SecondLayer.css";

import React from "react";
import { fadeIn } from "../Test/Variants";
import { motion } from 'framer-motion';
import seconds from "./Assests/layer.png";

export function SecondLayer() {
  return (
    <div className="second-ls">
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
       className="second-grid-1">
        <div className="s-left">
          <h2>A little reminder</h2>
          <p>
            Anime combines cutting-edge engineering skills with the latest
            gaming technology – all to create world-leading visualization tools.
            Whether it’s CPQ, interactive manuals or configuration of end-user
            products, we always deliver:
          
          <ul className="un">
            <li>Applications that increase sales</li>
            <li>Applications that increase efficiency</li>
            <li>Applications that enhance user experience</li>
            <li>Applications that support decision making</li>
          </ul>
          …and a whole lot of fun.
          </p>
        </div>
        <div className="s-right">
          <img src={seconds} alt="s" className="im"></img>
        </div>
      </motion.div>
    </div>
  );
}
