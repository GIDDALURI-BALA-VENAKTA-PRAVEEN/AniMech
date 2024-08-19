import './CarosuleSlider.css';
import background from "./Assests/Background.webp";
import background1 from "./Assests/Animech-Watch-Homepage-dimmed_922.jpeg";
import img1 from "./Assests/img2.jpg";
import { motion } from "framer-motion";

export function CarosuleSlider() {
  const slides = [
    {
      src: background,
      heading1: "World-class Visualization",
      subheading1: "Outstanding Real-time 3D Applications",
      paragraph: "Technology",
      heading2: "The future engine of digital sales"
    },
    {
      src: background1,
      heading1: "World-class Visualization",
      subheading1: "Outstanding Real-time 3D Applications",
      paragraph: "Technology",
      heading2: "The future engine of digital sales"
    },
    {
      src: img1,
      heading1: "World-class Visualization",
      subheading1: "Outstanding Real-time 3D Applications",
      paragraph: "Technology",
      heading2: "The future engine of digital sales"
    }
  ];

  return (
    <div id="carouselExampleIndicators" className="carousel-out-one carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            style={{width:"900px"}}
            className={`add ${index === 0 ? "active" : ""}`}
          ></li>
        ))}
      </ol>
      <div className="carousel-one carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img className="sl d-block w-100" src={slide.src} alt={`Slide ${index + 1}`} />
            <div className="carousel-caption">
              <motion.div className="Heading1">
                <motion.h1
                  initial={{y: -200, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 3}}
                >
                  {slide.heading1}
                </motion.h1>
                <motion.h5
                  initial={{x: -300, y: 200, opacity: 0}}
                  animate={{x: [-300, -250, -200, 0], y: 0, opacity: 1}}
                  transition={{duration: 4}}
                >
                  {slide.subheading1}
                </motion.h5>
              </motion.div>
              <div className="Heading2">
                <motion.p
                  initial={{x: -200, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 2}}
                >
                  {slide.paragraph}
                </motion.p>
                <motion.h1
                  initial={{y: 200, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 4}}
                >
                  {slide.heading2}
                </motion.h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}
