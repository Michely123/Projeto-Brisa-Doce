import React, { useState } from 'react';

function Encomenda() {
  const [feedback, setFeedback] = useState('');
  const handleChange = (event) => {
    setFeedback(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedback(''); 
  };

  return ( 
    <div>
         <img src="/padabolo.png" alt="Logo Padabolo" className="logo" /> 
      <h2>Sua encomenda foi concluída!</h2>
      <h3>Deixe o seu feedback aqui!</h3>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={feedback} 
          onChange={handleChange} 
          placeholder="Escreva seu feedback aqui..."
          rows="4" 
          cols="50" 
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Encomenda;
