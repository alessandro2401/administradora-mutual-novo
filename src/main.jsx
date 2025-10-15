import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRouteSimples from './components/ProtectedRouteSimples';
import LoginSimples from './components/LoginSimples';
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
        
        {/* Rota de login */}
        <Route path="/login" element={<LoginSimples />} />
        
        {/* Rota protegida - Sistemas Internos */}
        <Route
          path="/sistemas-internos"
          element={
            <ProtectedRouteSimples>
              <SistemasInternos />
            </ProtectedRouteSimples>
          }
        />
        
        {/* Rota protegida - Painel Administrativo */}
        <Route
          path="/admin"
          element={
            <ProtectedRouteSimples>
              <AdminPanel />
            </ProtectedRouteSimples>
          }
        />
        
        {/* Redirecionar rotas antigas */}
        <Route path="/acesso-negado" element={<Navigate to="/login" replace />} />
        <Route path="/aguardando-aprovacao" element={<Navigate to="/login" replace />} />
        
        {/* Redirecionar rotas não encontradas para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

