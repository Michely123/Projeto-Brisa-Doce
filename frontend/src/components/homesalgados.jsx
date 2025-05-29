import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/lados.css";

const produtos = {
  salgados: [
    { nome: "Esfihas", imagem: "/espiha.jpg", preco: 10.0 },
    { nome: "Empadinhas", imagem: "/empadinha.jpg", preco: 8.0 },
    { nome: "Quiches", imagem: "/quiches.jpg", preco: 12.0 },
    { nome: "Mini-pizzas", imagem: "/minipizza.png", preco: 15.0 },
  ],
  doces: [
    { nome: "Brigadeiros", imagem: "/brigadeiro.jpg", preco: 5.0 },
    { nome: "Bolos de pote", imagem: "/bolopote.jpg", preco: 7.0 },
    { nome: "Sonhos", imagem: "/sonho.jpg", preco: 6.0 },
    { nome: "Bolos", imagem: "/bolos.jpg", preco: 20.0 },
  ],
};

function HomeSalgados() {
  const [carrinho, setCarrinho] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState("salgados");

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find((item) => item.nome === produto.nome);
    
    if (produtoExistente) {
      produtoExistente.quantidade += 1;
      produtoExistente.precoTotal = produtoExistente.quantidade * produtoExistente.preco;
      setCarrinho([...carrinho]);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1, precoTotal: produto.preco }]);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home-salgados-container">
      <header className="header-icon-text">
        <img src="/padabolo.png" alt="Padabolo" className="header-icon" />
        <span className="header-text abhaya-libre-regular">Brisa-Docê</span>
      </header>
      
      <nav className="navbar">
        <div className="navbar-container">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={searchQuery}
              onChange={handleSearch} 
            />
          </div>
        </div>
      </nav>
      
      <div className="home-content">
        <div className="tabs">
          <button onClick={() => setActiveTab("salgados")} className={activeTab === "salgados" ? "active" : ""}>
            Salgados
          </button>
          <button onClick={() => setActiveTab("doces")} className={activeTab === "doces" ? "active" : ""}>
            Doces
          </button>
        </div>

        <div className="categoria">
          <h2>{activeTab === "salgados" ? "Salgados" : "Doces"}</h2>
          <div className="produtos">
            {produtos[activeTab].filter(item =>
              item.nome.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((item, index) => (
              <div key={index} className="produto-card">
                <img src={item.imagem} alt={item.nome} />
                <p>{item.nome}</p>
                <p className="preco-produto">R$ {item.preco.toFixed(2)}</p>
                <button onClick={() => adicionarAoCarrinho(item)}>Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <footer>
        <div className="footer-buttons">
          <Link to="/homesalgados">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#F25081" }}
              >
                <path d="M12 2.1L1 12h3v9h6v-7h4v7h6v-9h3L12 2.1z"></path>
              </svg>
            </button>
          </Link>
          <Link to="/carrinho" state={{ carrinho }}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f25584"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10" cy="20.5" r="1" />
                <circle cx="18" cy="20.5" r="1" />
                <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
              </svg>
            </button>
          </Link>
          <Link to="/configconta">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f25584"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default HomeSalgados;
