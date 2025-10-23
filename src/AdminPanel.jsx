import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            // Endpoint para listar usuários (a ser implementado no backend)
            const response = await axios.get('/api/admin/users');
            setUsers(response.data.users);
        } catch (err) {
            setError('Erro ao carregar usuários. Verifique o console.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const authorizeUser = async (email) => {
        try {
            const response = await axios.post('/api/admin/authorize', { email });
            alert(response.data.message);
            fetchUsers(); // Recarrega a lista após autorizar
        } catch (err) {
            alert('Erro ao autorizar usuário. Verifique o console.');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div className="text-center text-gray-700">Carregando usuários...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Painel de Administração - Solicitações de Acesso</h1>
            
            {users.length === 0 ? (
                <p className="text-gray-600">Nenhuma solicitação de acesso pendente.</p>
            ) : (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.email}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.is_authorized ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {user.is_authorized ? 'Autorizado' : 'Pendente'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        {!user.is_authorized && (
                                            <button
                                                onClick={() => authorizeUser(user.email)}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Autorizar
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;

