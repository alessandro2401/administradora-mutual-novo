import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestrictedPage = ({ onLogout }) => {
    const [content, setContent] = useState('Carregando conteúdo...');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            setError('Você não está logado. Redirecionando...');
            onLogout();
            return;
        }

        const fetchContent = async () => {
            try {
                const response = await axios.get('/api/restricted', {
                    headers: {
                        'Authorization': token
                    }
                });
                setContent(response.data.message);
            } catch (err) {
                setError('Erro ao carregar conteúdo restrito. Sua sessão pode ter expirado.');
                console.error(err);
                onLogout();
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [token, onLogout]);

    if (loading) {
        return <div className="p-8 text-center text-gray-600">Carregando...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-6">Área Restrita</h1>
                <p className="text-gray-700 mb-8">{content}</p>
                <button
                    onClick={onLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
                >
                    Sair
                </button>
            </div>
        </div>
    );
};

export default RestrictedPage;
