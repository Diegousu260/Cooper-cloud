import './ClientShowcase.css';

export const ClientShowcase = () => {
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
