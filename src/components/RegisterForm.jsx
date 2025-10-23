import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ onRegisterSuccess, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'As senhas não coincidem.' });
      return;
    }

    setLoading(true);

    try {
      // A API será acessível via /api/register no Vercel
      const response = await axios.post('/api/register', {
        name,
        email,
        password,
      });

      setMessage({ type: 'success', text: response.data.message });
      onRegisterSuccess(); // Chama a função para mudar o estado de visualização
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Erro ao processar o cadastro. Tente novamente.';
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Solicitação de Cadastro</h2>
      
      {message && (
        <div className={`p-3 mb-4 rounded-md text-sm ${
          message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nome Completo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="seu.email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Criar Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirmar Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className={`w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Solicitar Cadastro'}
          </button>
        </div>
        
        <p className="text-center text-xs text-gray-500 mt-4">
	          Seu acesso será liberado após a nossa autorização.
	        </p>
	        <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Já tem acesso?{' '}
                    <button
                        type="button"
                        onClick={onSwitchToLogin}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Fazer Login
                    </button>
                </p>
            </div>
      </form>
    </div>
  );
};

export default RegisterForm;

