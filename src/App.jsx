import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuemSomos from './pages/QuemSomos';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TransparenciaRegulatoria from './pages/TransparenciaRegulatoria';
import SistemasPage from './pages/SistemasPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/transparencia-regulatoria" element={<TransparenciaRegulatoria />} />
        <Route path="/sistemas" element={<SistemasPage />} />
      </Routes>
    </Router>
  );
}

export default App;

