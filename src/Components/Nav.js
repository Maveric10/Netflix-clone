import React, { useEffect, useState } from 'react'
import './nav.css'

const Nav = () => {
    const [show,handleShow] = useState(false)

    // useEffect(() => {
        
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true)
    //         } else handleShow(false);
    //     });

    //     return () => {
    //         window.removeEventListener("scroll")
    //     }
    // }, [])
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm"
        alt="netflix logo"
      />
    </div>
  );
}

export default Nav