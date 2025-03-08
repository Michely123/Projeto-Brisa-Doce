import React from 'react';
import CaixaTexto from "./CaixaTexto";
import { Link } from 'react-router-dom';
import '../css/login.css'

function Login() {
  return (
    <div className="login-container">
     
      <img src="/padabolo.png" alt="Logo Padabolo" className="logo" />
      <h2>Login</h2>
      <CaixaTexto but="text" place="Digite seu Email" />
      <CaixaTexto but="password" place="Digite sua Senha" />
      <Link to="/homesalgados">
        <CaixaTexto but="button" valor="Acessar" />
      </Link>

      <div className="passw">
        <Link to='/redsenha'>
          Esqueci a senha
        </Link>
      </div>

      <div className="ouu">
        <label>Ou</label>
      </div>

      <button className="goobuttn">Entrar com o Google</button>

      <div className="contan">
        <label>Ainda não possui uma conta? </label>
        <Link to='/cadastro'>
          Cadastre-se
        </Link>
      </div>
    </div>
  );
}

export default Login;
