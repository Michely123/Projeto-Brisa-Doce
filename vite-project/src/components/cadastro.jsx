
import CaixaTexto from "./CaixaTexto"
import { Link } from "react-router-dom"

function Cadastro() {

  return (
    <>
      <div>
      <img src="/padabolo.png" alt="Logo Padabolo" className="logo" />
        <h2>Novo Usuário</h2>
      </div>
      <div>
      <CaixaTexto but="text" place="Digite seu nome Completo" />
      <CaixaTexto but="text" place="Digite seu Email" />
      <CaixaTexto but="text" place="Digite sua Senha" />
      <Link to="/cadasconcluido">
      <CaixaTexto but="button" valor="Cadastrar" />
      </Link>
      </div>

      <div className="ouu">
        <label>Ou</label>
      </div>
      <button className="goobuttn">Entrar com o Google</button>

      <div className="contan">
        <label>Já possui uma conta? </label>
        <Link to='/login'>
          <a>Faça o login</a>
        </Link>
      </div>
    </>

  )
}

export default Cadastro