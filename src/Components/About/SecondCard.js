import "./SecondCard.css";

import React from "react";
import { fadeIn } from "../Test/Variants";
import { motion } from 'framer-motion';

export function SecondCard() {
  return (
    <div className="se-card-bg">
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
       className="se-card-grid">
        <div className="se-card-1">
          <h1>Working for a digital future</h1>
          <p>
            We don’t plant trees, we don’t know how to melt the polar ice caps
            or bring back the Dodo bird. But we know how to create
            state-of-the-art visualization tools. And we are proud to be at the
            forefront of a digital future – changing the landscape of digital
            commerce together with our customers, all over the world. It is our
            contribution to a better, healthier and more sustainable tomorrow –
            one pixel at a time.
          </p>
        </div>
        <div className="se-card-2">
          <h1>Solving problems together</h1>
          <p>
            We know… “teamwork” has become a bit of a cliché lately. But just so
            you know, we don’t throw that word around lightly. We truly believe
            that the group is stronger than the individual, a belief we practice
            every day. Because our great teamwork is not only reflected in our
            daily deliveries, it is an equally important and integral part of
            all our products.
          </p>
        </div>
        <div className="se-card-3">
          <h1>Because we love it</h1>
          <p>
            It’s true … we really do geek out on technology. It is not always
            about the technology itself, but more about what the technology can
            do for people. We really love the challenge of exceeding customer
            needs and developing working applications. We use new technologies
            to constantly push the boundaries of what is possible on the web or
            on a phone – and ultimately help people and businesses make smarter
            decisions.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
