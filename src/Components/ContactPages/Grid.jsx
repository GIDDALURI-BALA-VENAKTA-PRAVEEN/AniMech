import "./Grid.css";

import { Form } from "./Form";
import React from "react";
import { fadeIn } from "../Test/Variants";
import five from "../ContactPages/5.jpg";
import four from "../ContactPages/4.jpg";
import { motion } from "framer-motion";
import one from "../ContactPages/1.jpg";
import three from "../ContactPages/3.png";
import two from "../ContactPages/2.jpg";

export function Grid() {
    return (
        <div className="bg">
            <br></br>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="grid-container"
            >
                <div className="left-part">
                    <h1>We are Animech</h1>
                    <p>
                        We are Animech – a leader in advanced visualization tools that
                        redefine digital commerce. With our expertise, we strive for
                        tailor-made solutions that improve sales and customer experience for
                        our partners.
                    </p>
                    <br></br>
                    <p>Ekeby Bruk 4J</p>
                    <p>752 63 Uppsala</p>
                    <p>Sweden</p>
                    <br></br>
                    <p>
                        T: <span>+46 (0) 18 53 92 20</span>
                    </p>
                    <p>
                        E:<span> hello@animech.com</span>
                    </p>
                </div>
                <div className="right-part">
                    <div className="sub">
                        <div className="column1">
                            <img src={one} alt="Image 1" />
                            <img src={one} alt="Image 2" />
                            <img src={three} alt="Image 3" />
                        </div>
                        <div className="column2">
                            <img src={four} alt="Image 4" />
                            <img src={five} alt="Image 5" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
