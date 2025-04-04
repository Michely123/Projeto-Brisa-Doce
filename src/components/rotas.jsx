
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Cadastro from "./cadastro";
import Redsenha from "./redsenha";
import HomeSalgados from "./homesalgados";
import Cadasconcluido from "./cadasconcluido";
import Configconta from "./configconta";
import Carrinho from "./carrinho";
import Pagamento from "./pagamento";
import Encomenda from "./encomenda";
import Configuracoes from "./configuracoes";
import Configpedidos from "./configmeuspedidos";
import Suporte from "./suporte";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redsenha" element={<Redsenha />} />
        <Route path="/homesalgados" element={<HomeSalgados />} />
        <Route path="/cadasconcluido" element={<Cadasconcluido />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/configconta" element={<Configconta />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/encomenda" element={<Encomenda />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/configpedidos" element={<Configpedidos />} />
        <Route path="/suporte" element={<Suporte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
