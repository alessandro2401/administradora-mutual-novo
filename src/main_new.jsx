import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import WaitingApproval from './components/WaitingApproval';
import SistemasInternos from './components/SistemasInternos';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rota principal - Site público */}
          <Route path="/" element={<App />} />
          
          {/* Rota de login */}
          <Route path="/login" element={<Login />} />
          
          {/* Rota de aguardando aprovação */}
          <Route path="/aguardando-aprovacao" element={<WaitingApproval />} />
          
          {/* Rota protegida - Sistemas Internos */}
          <Route
            path="/sistemas-internos"
            element={
              <ProtectedRoute>
                <SistemasInternos />
              </ProtectedRoute>
            }
          />
          
          {/* Redirecionar rotas não encontradas para home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

