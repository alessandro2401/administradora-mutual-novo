import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';

const AuthPage = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegisterSuccess = () => {
        setIsRegistered(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {isRegistered ? (
                    <div className="p-6 bg-white rounded-lg shadow-xl text-center">
                        <h2 className="text-2xl font-bold mb-4 text-green-600">Solicitação Enviada!</h2>
                        <p className="text-gray-700 mb-6">
                            Sua solicitação de acesso foi registrada com sucesso.
                            Aguarde a análise e autorização da nossa equipe.
                        </p>
                        <p className="text-sm text-gray-500">
                            Você será notificado por e-mail assim que seu acesso for liberado.
                        </p>
                    </div>
                ) : (
                    <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
                )}
            </div>
        </div>
    );
};

export default AuthPage;

