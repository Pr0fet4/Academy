import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from '../assets/logo.svg';
import open from '../assets/open.svg'
import close from '../assets/close.svg'

import '../styles/login.scss';


export function Login() {
  const [showPassord, setShowPassord] = useState(false);

  return (
    <div id="page-login">
      <div className="login-box">
        <img src={logo} alt="logo academy" />
        <label>E-mail</label>
        <input id="email" type="email" placeholder="noah@gmail.com" />
        <label>Senha</label>
        <button className="password-button">
          <img            
            onClick={() => setShowPassord(!showPassord)}
            src={showPassord ? open : close}
            alt="eye"
          />
        </button>
        <input id="password" type={showPassord ? "text" : "password"} ></input>
        <Link to="/RecoverPassword" className="forget-password">Esqueci minha senha</Link>

       <button className="enter-button">
         Entrar
       </button>
      </div>
      
      <p>Não tem uma conta? <Link to="/registration">Cadastre-se!</Link></p>
    </div>
  );
}