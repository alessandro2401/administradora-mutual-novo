import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const WaitingApproval = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-4">
            <svg
              className="h-8 w-8 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Aguardando Aprovação
          </h2>
          
          <p className="text-gray-600 mb-6">
            Olá, <strong>{user?.displayName || user?.email}</strong>!
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              Seu acesso ainda não foi autorizado. Por favor, entre em contato com o administrador do sistema para solicitar permissão de acesso.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm text-gray-600">
              <p className="font-semibold mb-2">Informações de contato:</p>
              <p>E-mail: contato@administradoramutual.com.br</p>
              <p>Telefone: (11) 1234-5678</p>
            </div>

            <button
              onClick={handleSignOut}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingApproval;

