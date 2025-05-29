import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../css/carrinho.css";

function Carrinho() {
  const location = useLocation();
  const navigate = useNavigate();
  const [carrinho, setCarrinho] = useState(
    location.state?.carrinho.map(item => ({ ...item, quantidade: 1 })) || []
  );
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    console.log("Carrinho carregado:", carrinho);
  }, [carrinho]);

  const removerDoCarrinho = (indexParaRemover) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.filter((_, index) => index !== indexParaRemover)
    );
  };

  const alterarQuantidade = (index, incremento) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((item, i) => {
        if (i === index) {
          const novaQuantidade = item.quantidade + incremento;
          return {
            ...item,
            quantidade: novaQuantidade > 0 ? novaQuantidade : 1, 
          };
        }
        return item;
      })
    );
  };

  const handleContinuarComprando = () => {
    navigate("/homesalgados", { state: { carrinho } });
  };

  const handleIrParaPagamento = () => {
    navigate("/pagamento");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <header className="header-icon-text">
        <img src="/padabolo.png" alt="Padabolo" className="header-icon" />
        <span className="header-text abhaya-libre-regular">Brisa-Docê</span>
      </header>
      
      <div className="carrinho-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <h2>Meu Carrinho</h2>
        {carrinho.length > 0 ? (
          <div className="produtos-carrinho">
            {carrinho
              .filter(item => 
                item.nome.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, index) => (
                <div key={index} className="produto-card-carrinho">
                  <img src={item.imagem} alt={item.nome} className="imagem-produto" />
                  <div className="detalhes-produto">
                    <p className="nome-produto">{item.nome}</p>
                    <p className="preco-produto">
                      R$ {(item.preco * item.quantidade).toFixed(2)}
                    </p>
                    <div className="quantidade-controle">
                      <button onClick={() => alterarQuantidade(index, -1)}>-</button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => alterarQuantidade(index, 1)}>+</button>
                    </div>
                  </div>
                  <button onClick={() => removerDoCarrinho(index)} className="botao-remover">
                    Remover
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}

        <div className="total-container">
          <button onClick={handleContinuarComprando} className="botao-continuar">
            Continuar comprando
          </button>
          <button onClick={handleIrParaPagamento} className="botao-pagamento">
            Ir para o pagamento
          </button>
        </div>

        <footer>
          <div className="footer-buttons">
            <Link to="/homesalgados">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#F25081" }}>
                  <path d="M12 2.1L1 12h3v9h6v-7h4v7h6v-9h3L12 2.1z"></path>
                </svg>
              </button>
            </Link>
            <Link to="/carrinho" state={{ carrinho }}>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f25584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="20.5" r="1" />
                  <circle cx="18" cy="20.5" r="1" />
                  <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
                </svg>
              </button>
            </Link>
            <Link to="/configconta">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f25584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Carrinho;
  