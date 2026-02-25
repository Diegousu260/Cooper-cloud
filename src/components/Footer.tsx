import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Cooper Cloud</h3>
            <p className="footer-description">
              Consultoria premium em Cloud, FinOps e TI para empresas que buscam transformação digital real.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Serviços</h4>
            <ul className="footer-links">
              <li><a href="#servicos">FinOps</a></li>
              <li><a href="#servicos">Cloud Strategy</a></li>
              <li><a href="#servicos">Consultoria TI</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li><a href="#clientes">Cases</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contato</h4>
            <ul className="footer-contact">
              <li>
                <a href="mailto:contato@coopercloud.com.br">contato@coopercloud.com.br</a>
              </li>
              <li>
                <a href="tel:+5511999999999">+55 (11) 9 9999-9999</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            {currentYear} Cooper Cloud. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
