import { useState } from 'react';

import logo from '../assets/logo.svg';
import open from '../assets/open.svg'
import close from '../assets/close.svg'

import '../styles/registration.scss';


export function Registration() {
  const [showPassord, setShowPassord] = useState(false);

  return (
    <div id="registration-page">
      <div className="resgistration-box">
        <img src={logo} alt="logo academy" />
        <label>Nome</label>
        <input type="text" />
        <label>E-mail</label>
        <input id="email" type="email" placeholder="exemplo@gmail.com" />
        <label>Senha</label>
        <button className="password-button">
          <img
            onClick={() => setShowPassord(!showPassord)}
            src={showPassord ? open : close}
            alt="eye"
          />
        </button>
        <input id="password" type={showPassord ? "text" : "password"} ></input>

        <button className="registration-button">
          Criar Conta
        </button>
      </div>
      <p>Já possui uma conta? <a href="/">Acesse agora!</a></p>
    </div>
  );
}