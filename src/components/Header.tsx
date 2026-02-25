import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Cooper Cloud</span>
          </div>
          <nav className="nav">
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#clientes" className="nav-link">Clientes</a>
            <a href="#contato" className="nav-link nav-link-cta">Solicitar Proposta</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
