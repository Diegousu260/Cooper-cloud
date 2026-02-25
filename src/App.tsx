import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ClientShowcase } from './components/ClientShowcase';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientShowcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
