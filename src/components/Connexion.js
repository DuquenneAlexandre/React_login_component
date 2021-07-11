import React from 'react'
import Connexion_form from './Connexion_form'
import logo from '../images/work_image_3.jpg';
import Footer from './Footer'

const Connexion = () => {
  return (
    <div>
      <div className="Connexion_container" style={{backgroundImage: `url(${logo})`, backgroundSize: '1000px'}}>
        <div className="left_wrapper" ></div>
        <div className="middle_wrapper"></div>
        <div className="right_wrapper">
          <Connexion_form />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Connexion
