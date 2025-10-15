import { Navigate } from 'react-router-dom';

const ProtectedRouteSimples = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
  const authTime = sessionStorage.getItem('authTime');
  
  // Verificar se a autenticação ainda é válida (24 horas)
  if (isAuthenticated && authTime) {
    const now = Date.now();
    const authAge = now - parseInt(authTime);
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (authAge > twentyFourHours) {
      // Sessão expirada
      sessionStorage.removeItem('authenticated');
      sessionStorage.removeItem('authTime');
      return <Navigate to="/login" replace />;
    }
    
    return children;
  }
  
  return <Navigate to="/login" replace />;
};

export default ProtectedRouteSimples;

