import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforme sua infraestrutura em{' '}
            <span className="hero-highlight">vantagem competitiva</span>
          </h1>
          <p className="hero-subtitle">
            Consultoria premium em Cloud e FinOps que gera resultados reais.
            Reduza custos, aumente eficiência e escale com confiança.
          </p>
          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary">
              Solicitar Proposta Personalizada
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Conheça Nossos Serviços
            </a>
          </div>
          <div className="hero-trust">
            <p className="trust-text">Confiado por líderes de mercado</p>
            <div className="trust-badge">
              <span className="trust-icon">✓</span>
              <span>MOG Embalagens</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
