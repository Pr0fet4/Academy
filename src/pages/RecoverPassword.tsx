import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

import '../styles/recoverPassword.scss';


export function RecoverPassword() {
  return (
    <div id="recover-page">
      <div className="recover-box">
        <img src={logo} alt="logo academy" />
        <p>Informe o e-mail associado a sua <br /> conta e vamos te enviar instruções <br /> para resetar sua senha</p>
        <label>E-mail</label>
        <input id="email" type="email" placeholder="exemplo@gmail.com" />

        <Link className="link" to="/emailConfirmation">
          <button className="recover-button">Recuperar senha</button>
        </Link>
      </div>
    </div>
  );
}