import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SistemasInternos from './components/SistemasInternos';
import AdminPanel from './components/AdminPanel';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota principal - Site público */}
        <Route path="/" element={<App />} />
        
        {/* Sistemas Internos - Acesso Livre */}
        <Route path="/sistemas-internos" element={<SistemasInternos />} />
        
        {/* Painel Administrativo - Acesso Livre */}
        <Route path="/admin" element={<AdminPanel />} />
        
        {/* Redirecionar rotas antigas de login */}
        <Route path="/login" element={<Navigate to="/sistemas-internos" replace />} />
        <Route path="/acesso-negado" element={<Navigate to="/sistemas-internos" replace />} />
        <Route path="/aguardando-aprovacao" element={<Navigate to="/sistemas-internos" replace />} />
        
        {/* Redirecionar rotas não encontradas para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

