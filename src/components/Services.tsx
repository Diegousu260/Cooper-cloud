import React from 'react';
import './Services.css';

const services = [
  {
    title: 'FinOps',
    description: 'Otimização inteligente de custos em nuvem. Reduza gastos sem comprometer performance.',
    features: [
      'Análise detalhada de custos',
      'Otimização de recursos',
      'Monitoramento contínuo',
      'Relatórios executivos'
    ],
    icon: '📊'
  },
  {
    title: 'Cloud Strategy',
    description: 'Estratégia completa para migração e gestão de infraestrutura na nuvem.',
    features: [
      'Arquitetura cloud-native',
      'Migração segura',
      'Escalabilidade automática',
      'Alta disponibilidade'
    ],
    icon: '☁️'
  },
  {
    title: 'Consultoria TI',
    description: 'Consultoria estratégica para transformação digital e modernização de sistemas.',
    features: [
      'Auditoria de infraestrutura',
      'Planejamento estratégico',
      'Implementação de melhores práticas',
      'Suporte especializado'
    ],
    icon: '🚀'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Serviços que Geram Resultados</h2>
          <p className="services-subtitle">
            Soluções premium sob medida para pequenas e médias empresas que buscam excelência
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
