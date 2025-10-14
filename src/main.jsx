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
        
        {/* Rota de Sistemas Internos - ACESSO LIVRE */}
        <Route path="/sistemas-internos" element={<SistemasInternos />} />
        
        {/* Rota de Painel Administrativo - ACESSO LIVRE */}
        <Route path="/admin" element={<AdminPanel />} />
        
        {/* Manter compatibilidade com rotas antigas */}
        <Route path="/login" element={<Navigate to="/sistemas-internos" replace />} />
        <Route path="/aguardando-aprovacao" element={<Navigate to="/sistemas-internos" replace />} />
        
        {/* Redirecionar rotas não encontradas para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

