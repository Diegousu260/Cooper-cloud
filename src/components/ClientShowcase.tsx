import React from 'react';
import './ClientShowcase.css';

export const ClientShowcase: React.FC = () => {
  return (
    <section id="clientes" className="client-showcase">
      <div className="container">
        <div className="showcase-header">
          <h2 className="showcase-title">Case de Sucesso</h2>
          <p className="showcase-subtitle">
            Conheça como transformamos a infraestrutura de TI da MOG Embalagens
          </p>
        </div>

        <div className="showcase-content">
          <div className="client-card">
            <div className="client-logo-section">
              <div className="client-logo">
                <span className="logo-letters">MOG</span>
                <span className="logo-subtitle">Embalagens</span>
              </div>
            </div>

            <div className="client-info">
              <h3 className="client-name">MOG Embalagens</h3>
              <p className="client-description">
                Líder em soluções de embalagens industriais, a MOG Embalagens confiou na Cooper Cloud
                para modernizar sua infraestrutura de TI e otimizar custos operacionais.
              </p>

              <div className="results-grid">
                <div className="result-item">
                  <div className="result-value">45%</div>
                  <div className="result-label">Redução de Custos em Cloud</div>
                </div>
                <div className="result-item">
                  <div className="result-value">99.9%</div>
                  <div className="result-label">Disponibilidade Garantida</div>
                </div>
                <div className="result-item">
                  <div className="result-value">3x</div>
                  <div className="result-label">Aumento em Performance</div>
                </div>
              </div>

              <div className="solutions-applied">
                <h4 className="solutions-title">Soluções Implementadas</h4>
                <div className="solutions-tags">
                  <span className="solution-tag">Migração Cloud</span>
                  <span className="solution-tag">FinOps</span>
                  <span className="solution-tag">Otimização de Custos</span>
                  <span className="solution-tag">Monitoramento 24/7</span>
                </div>
              </div>

              <blockquote className="client-testimonial">
                "A Cooper Cloud transformou nossa infraestrutura de TI em um ativo estratégico.
                A economia gerada e a melhoria na disponibilidade dos nossos sistemas superaram
                todas as expectativas."
                <cite>— Diretor de TI, MOG Embalagens</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
