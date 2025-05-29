import CaixaTexto from "./CaixaTexto";
import { Link } from "react-router-dom";


function Cadasconcluido() {
    return ( 
      <div>
           <img src="/padabolo.png" alt="Logo Padabolo" className="logo" />
      <h1>Cadastro concluído clique em realizar o login para prosseguir </h1>
      <Link to="/login">
      <CaixaTexto but="button" valor="Realizar o login" />
      </Link>
      </div>
    );
  }
  
  export default Cadasconcluido;
  