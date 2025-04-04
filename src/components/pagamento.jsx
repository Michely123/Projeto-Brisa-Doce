import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/pagamento.css';

function Pagamento() {
  const [selectedPayment, setSelectedPayment] = useState('pix');
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <header className="header-icon-text">
        <img src="/padabolo.png" alt="Padabolo" className="header-icon" />
        <span className="header-text abhaya-libre-regular">Brisa-Docê</span>
      </header>

      <div className="payment-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <h2>Pagamento</h2>
        <div className="produto-pesquisado">
          {searchQuery && (
            <p>Resultados para: <strong>{searchQuery}</strong></p>
          )}
        </div>

        <div className="user-data">
          <h3>Dados Cadastrados do Usuário</h3>
          <p>Nome: Joao Silva</p>
          <p>e-mail: joaosilva@gmail.com</p>
        </div>

        <div className="payment-option">
          <label>
            <input
              type="radio"
              name="payment"
              value="pix"
              checked={selectedPayment === 'pix'}
              onChange={() => setSelectedPayment('pix')}
            />
            <span>Pagamento via Pix</span>
          </label>
        </div>

        <div className="payment-option">
          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={selectedPayment === 'card'}
              onChange={() => setSelectedPayment('card')}
            />
            <span>Pagamento por Cartão</span>
          </label>
        </div>

        <Link to="/encomenda">
          <button className="button">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Pagamento;
