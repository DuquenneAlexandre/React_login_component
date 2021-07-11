import React from 'react'
import Button_connexion from '../buttons/Button_connexion'

const Connexion_form = () => {
  return (
    <div className="Connexion_form">
      <h1> Bienvenu </h1>
      <div className="Wrapper_wrong_pass_log"> Mauvais login ou mot de passe</div>
      <div className="Wrapper_username">
        <div className="username_label">Identifiant</div>
        <input className="username_input" placeholder="Identifiant" autoFocus/>
      </div>
      <div className="Wrapper_password">
        <div className="password_label">Mot de passe</div>
        <input className="password_input" placeholder="Mot de passe"/>
        <div className="button_connexion_form"><Button_connexion /></div>
      </div>
      <div className="Wrapper_forgot_password">
        <a href="/" className="label_forgot_password">Mot de passe oublié ?</a>
      </div>
    </div>
  )
}

export default Connexion_form
