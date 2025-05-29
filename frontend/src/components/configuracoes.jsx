import React from 'react';
import { Link } from 'react-router-dom';
import '../css/configconta.css';

function Configuracoes(props) {
  return (
    <div>
      <header className="header-icon-text">
        <span className="header-text abhaya-libre-regular">Brisa-Docê</span>
      </header>

      <h2>Configurações</h2>
      
      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-person"
          viewBox="0 0 16 16"
          style={{ marginRight: '10px' }}
        >
          <path d="M8 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          <path d="M0 12s1-3 4-3h8s4 0 4 3v1H0v-1z" />
        </svg>
        <button style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Editar Conta
        </button>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
          style={{ marginRight: '10px' }}
        >
          <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V1h1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h1V.5A.5.5 0 0 1 2.5 0h3zM4 1h8v1H4V1zM1 3v10h14V3H1z" />
        </svg>
        <button style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}>
          Excluir Conta
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
          <Link to="/carrinho">
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
  );
}

export default Configuracoes;
