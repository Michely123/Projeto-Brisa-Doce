import CaixaTexto from "./CaixaTexto";

function Redsenha() {
    return ( 
       <div>
            <img src="/padabolo.png" alt="Logo Padabolo" className="logo" />
        <h2>Redefinição de Senha!</h2>
        <h4> Informe um email e enviaremos um link para recuperação de sua senha.</h4>
        <CaixaTexto but="text" place="Informe seu Email"/>
        <CaixaTexto but="button" valor="Enviar link de recuperação"/>
       </div> 

    );
  }
  
  export default Redsenha;
  
