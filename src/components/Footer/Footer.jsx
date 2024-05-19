import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="Footer-container">

        <hr />

        <div className='footer'>

            <div className="social-links">

                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />

            </div>

            

            {/* {for linkable image} */}

          {/* 
            <div className="social-links">

              <a href="https://github.com">
              <img src={Github} alt="Github" />
              </a>

              <a href="https://instagram.com">
              <img src={Instagram} alt="Instagram" />
              </a>

              <a href="https://linkedin.com">
              <img src={Linkedin} alt="LinkedIn" />
              </a>

            </div>  */}



            <div>
                <img src={Logo} alt="" />
            </div>

        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>

    </div>
  )
}

export default Footer