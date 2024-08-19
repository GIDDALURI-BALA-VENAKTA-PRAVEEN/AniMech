import "./NavBars.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";

export function NavBars() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <section>
        <header>
          <h3 className="logo">LOGO</h3>
          <nav ref={navRef}>
            <ul>
              <li>
                <Link to="/home" onClick={showNavbar}>PRODUCT</Link>
              </li>
              <li>
                <Link to="/project" onClick={showNavbar}>PROJECT</Link>
              </li>
              <li className="Sub-menu">
                <a href="/#" onClick={showNavbar}>RESOURCES</a>
                <ul>
                  <li>
                    <a href="#">Article</a>
                  </li>
                  <li>
                    <a href="#">Unreal Web</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about" onClick={showNavbar}>ABOUT</Link>
              </li>
              <li>
                <Link to="/contact" onClick={showNavbar}>CONTACT</Link>
              </li>
            </ul>
            <div></div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <div className="side">
            <Link to="/demo" className="btnLink">
              <button className="buttonbook">
                Book Demo
              </button>
            </Link>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </div>
        </header>
      </section>
    </>
  );
}
