import "./Cards.css";

import React from "react";
import { fadeIn } from "../Test/Variants";
import layer from "./Assests/layer.png";
import { motion } from 'framer-motion';

export function Cards() {
  return (
    <div className="card-bg">
      <motion.div 
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="card-grid">
        <div className="card-1">
          <h1>3D visualization</h1>
          <p>
            As technology has matured and customer awareness has increased, the
            importance of 3D visualization cannot be underestimated. The gaming
            industry has driven the development but the transition to the
            corporate market is rapid. We help you find and incorporate that
            visualization advantage that will surprise your end customer and
            differentiate your product from the competition.
          </p>
        </div>
        <div className="card-2">
          <h1>UX & Design</h1>
          <p>
            Intuitive applications that are immersive, interactive and fun to
            use will not only inspire and educate the customer – customers will
            be confident when making the purchase decision. We combine 2D and 3D
            to deliver top-level user experiences in our finished products. The
            extended understanding of the two worlds is great for finding hidden
            features that help us maximize the value of your product
            configuration.
          </p>
        </div>
        <div className="card-3">
          <h1>Development</h1>
          <p>
            With background and experience working in life science, engineering
            and gaming companies, we bring our strengths together and share our
            knowledge when developing our applications. We always use the latest
            technology in our deliveries to exceed customer and industry
            expectations.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
