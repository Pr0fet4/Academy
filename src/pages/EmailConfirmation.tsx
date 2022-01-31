import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import email from '../assets/email.svg';

import '../styles/emailConfirmation.scss';


export function EmailConfirmation() {
  return (
    <div id="email-page">
      <div className="confirmation-box">
        <img src={logo} alt="logo academy" />
        <img className="email-icon" src={email} alt="email icon" />
        <h2>Confira seu e-mail</h2>
        <p>Enviamos as intruções para recuperação de senha</p>
        <Link to="/">
          <button className="ok-button">
            Ok, entendi
          </button>
        </Link>
      </div>
    </div>
  );
}