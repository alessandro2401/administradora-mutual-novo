import React, { useState, useEffect } from 'react';
import AuthPage from './AuthPage';
import AdminPanel from './AdminPanel';
import './App.css';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    if (path === '/admin') {
      return <AdminPanel />;
    }
    return <AuthPage />;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {renderContent()}
    </div>
  );
}

export default App;
