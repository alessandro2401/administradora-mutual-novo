import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';

const AdminPanel = () => {
  const [accessRequests, setAccessRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(null);
  const { user } = useAuth();

  // Carregar solicitações de acesso
  const loadAccessRequests = async () => {
    try {
      setLoading(true);
      const requestsSnapshot = await getDocs(collection(db, 'access_requests'));
      const requests = requestsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Ordenar por data de solicitação (mais recentes primeiro)
      requests.sort((a, b) => {
        if (!a.requestedAt || !b.requestedAt) return 0;
        return b.requestedAt.seconds - a.requestedAt.seconds;
      });

      setAccessRequests(requests);
    } catch (error) {
      console.error('Erro ao carregar solicitações:', error);
    } finally {
      setLoading(false);
    }
  };

  // Aprovar usuário
  const approveUser = async (request) => {
    try {
      setProcessing(request.id);

      // Adicionar à lista de usuários autorizados
      await setDoc(doc(db, 'authorized_users', request.email), {
        email: request.email,
        approved: 'true',
        approvedAt: serverTimestamp(),
        approvedBy: user.email
      });

      // Atualizar status da solicitação
      await updateDoc(doc(db, 'access_requests', request.id), {
        status: 'approved',
        approvedAt: serverTimestamp(),
        approvedBy: user.email
      });

      // Recarregar lista
      await loadAccessRequests();
      alert(`Usuário ${request.email} aprovado com sucesso!`);
    } catch (error) {
      console.error('Erro ao aprovar usuário:', error);
      alert('Erro ao aprovar usuário. Tente novamente.');
    } finally {
      setProcessing(null);
    }
  };

  // Rejeitar usuário
  const rejectUser = async (request) => {
    try {
      setProcessing(request.id);

      // Atualizar status da solicitação
      await updateDoc(doc(db, 'access_requests', request.id), {
        status: 'rejected',
        rejectedAt: serverTimestamp(),
        rejectedBy: user.email
      });

      // Recarregar lista
      await loadAccessRequests();
      alert(`Solicitação de ${request.email} rejeitada.`);
    } catch (error) {
      console.error('Erro ao rejeitar usuário:', error);
      alert('Erro ao rejeitar usuário. Tente novamente.');
    } finally {
      setProcessing(null);
    }
  };

  // Remover solicitação
  const removeRequest = async (requestId) => {
    if (!confirm('Tem certeza que deseja remover esta solicitação?')) {
      return;
    }

    try {
      setProcessing(requestId);
      await deleteDoc(doc(db, 'access_requests', requestId));
      await loadAccessRequests();
      alert('Solicitação removida com sucesso!');
    } catch (error) {
      console.error('Erro ao remover solicitação:', error);
      alert('Erro ao remover solicitação. Tente novamente.');
    } finally {
      setProcessing(null);
    }
  };

  useEffect(() => {
    loadAccessRequests();
  }, []);

  const getStatusBadge = (status) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    const labels = {
      pending: 'Pendente',
      approved: 'Aprovado',
      rejected: 'Rejeitado'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badges[status] || 'bg-gray-100 text-gray-800'}`}>
        {labels[status] || status}
      </span>
    );
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando solicitações...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Painel Administrativo
          </h1>
          <p className="text-gray-600">
            Gerencie as solicitações de acesso ao sistema
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pendentes</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {accessRequests.filter(r => r.status === 'pending').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Aprovados</p>
                <p className="text-3xl font-bold text-green-600">
                  {accessRequests.filter(r => r.status === 'approved').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejeitados</p>
                <p className="text-3xl font-bold text-red-600">
                  {accessRequests.filter(r => r.status === 'rejected').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Solicitações */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Solicitações de Acesso
            </h2>
          </div>

          {accessRequests.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Nenhuma solicitação de acesso encontrada.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usuário
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      E-mail
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data da Solicitação
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {accessRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {request.photoURL && (
                            <img
                              src={request.photoURL}
                              alt={request.displayName}
                              className="w-10 h-10 rounded-full mr-3"
                            />
                          )}
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {request.displayName || 'Não informado'}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {formatDate(request.requestedAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(request.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {request.status === 'pending' ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => approveUser(request)}
                              disabled={processing === request.id}
                              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              {processing === request.id ? 'Processando...' : 'Aprovar'}
                            </button>
                            <button
                              onClick={() => rejectUser(request)}
                              disabled={processing === request.id}
                              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              Rejeitar
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => removeRequest(request.id)}
                            disabled={processing === request.id}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            Remover
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

        {/* Botão de Atualizar */}
        <div className="mt-6 text-center">
          <button
            onClick={loadAccessRequests}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Atualizando...' : 'Atualizar Lista'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

