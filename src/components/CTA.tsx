import React from 'react';
import './CTA.css';

export const CTA: React.FC = () => {
  return (
    <section id="contato" className="cta">
      <div className="cta-background"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Pronto para Transformar sua Infraestrutura?</h2>
          <p className="cta-subtitle">
            Solicite uma proposta personalizada e descubra como podemos reduzir seus custos
            e aumentar a eficiência da sua operação em cloud.
          </p>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="cta-icon">✓</span>
              <span>Análise gratuita de custos</span>
            </div>
            <div className="cta-feature">
              <span className="cta-icon">✓</span>
              <span>Proposta personalizada</span>
            </div>
            <div className="cta-feature">
              <span className="cta-icon">✓</span>
              <span>Sem compromisso inicial</span>
            </div>
          </div>
          <a href="mailto:contato@coopercloud.com.br" className="cta-button">
            Solicitar Proposta Agora
          </a>
          <p className="cta-contact">
            Ou entre em contato: <a href="tel:+55 41 8452-0679" className="cta-link">+55 41 8452-0679</a>
          </p>
        </div>
      </div>
    </section>
  );
};
