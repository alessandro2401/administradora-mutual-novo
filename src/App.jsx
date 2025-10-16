import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuemSomos from './pages/QuemSomos';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TransparenciaRegulatoria from './pages/TransparenciaRegulatoria';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/transparencia-regulatoria" element={<TransparenciaRegulatoria />} />
      </Routes>
    </Router>
  );
}

export default App;

