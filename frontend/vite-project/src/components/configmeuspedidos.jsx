import React from 'react';
import { Link } from 'react-router-dom';
import '../css/configconta.css'; 

function Configpedidos() {
  const carrinho = []; 

  return (
    <div>
      <header className="header-icon-text">
        <span className="header-text abhaya-libre-regular">Brisa-Docê</span>
      </header>
      
      <div className="user-profile">
        <h2>Meus Pedidos</h2>
        <p style={{ fontSize: '14px', color: 'gray' }}>Você não possui nenhum pedido!</p>

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

export default Configpedidos;
