import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import RestrictedPage from './RestrictedPage';
import axios from 'axios';

const AuthPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [loginMessage, setLoginMessage] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginMessage(null);
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await axios.post('/api/login', { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setIsLoggedIn(true);
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Erro de conexão ou credenciais inválidas.';
            setLoginMessage({ type: 'error', text: message });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setIsRegistering(false);
    };

    if (isLoggedIn) {
        return <RestrictedPage onLogout={handleLogout} />;
    }

    if (isRegistering) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <RegisterForm onRegisterSuccess={() => setIsRegistering(false)} onSwitchToLogin={() => setIsRegistering(false)} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Acesso à Área Restrita</h1>
                {loginMessage && (
                    <div className={\`p-3 mb-4 rounded text-sm \${loginMessage.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}\`}>
                        {loginMessage.text}
                    </div>
                )}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
                    >
                        Entrar
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Não tem acesso?{' '}
                        <button
                            type="button"
                            onClick={() => setIsRegistering(true)}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Solicitar Cadastro
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;

