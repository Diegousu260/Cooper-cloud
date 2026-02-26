import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/WhatsApp_Image_2026-02-26_at_12.16.22.jpeg" alt="Cooper Cloud" className="logo-image" />
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
