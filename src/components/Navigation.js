import React from 'react'
import { Link}  from 'react-router-dom'
import Button_connexion from '../buttons/Button_connexion'

const Navigation = () => {
  return (
    <div className="Navbar">
      <Link to="/">Acceuil</Link>
      <Link to="/">Formations</Link>
      <Link to="/">Dossiers</Link>
      <Link to="/">Contactez-nous</Link>
      <Link to="/"><Button_connexion /></Link>
    </div>
  )
}

export default Navigation
