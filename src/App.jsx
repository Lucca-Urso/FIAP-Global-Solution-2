import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Monitoring from './pages/Monitoring';
import Alerts from './pages/Alerts';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import Contributor from './pages/Contributor';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/monitoramento" element={<Monitoring />} />
            <Route path="/alertas" element={<Alerts />} />
            <Route path="/tecnologia" element={<Technology />} />
            <Route path="/impacto" element={<Impact />} />
            <Route path="/contribua" element={<Contributor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
