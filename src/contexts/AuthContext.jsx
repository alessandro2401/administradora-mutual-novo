import { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase/config';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  // Lista de e-mails pré-autorizados (whitelist)
  const AUTHORIZED_EMAILS = [
    'junioftosta@gmail.com',
    'adrielemmbr@gmail.com',
    'alessandro@pizzolatto.com.br',
    'alessandro.pizzolatto@gmail.com'
  ];

  // Verificar se o usuário está na whitelist
  const checkAuthorization = async (userEmail) => {
    try {
      // Primeiro verifica se está na lista hardcoded
      if (AUTHORIZED_EMAILS.includes(userEmail.toLowerCase())) {
        return true;
      }

      // Depois verifica no Firestore
      const userDoc = await getDoc(doc(db, 'authorized_users', userEmail));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        return userData.approved === 'true' || userData.approved === true;
      }

      return false;
    } catch (error) {
      console.error('Erro ao verificar autorização:', error);
      return false;
    }
  };

  // Registrar solicitação de acesso para usuários não autorizados
  const registerAccessRequest = async (user) => {
    try {
      const requestRef = doc(db, 'access_requests', user.email);
      const requestDoc = await getDoc(requestRef);

      // Se já existe uma solicitação, não cria outra
      if (requestDoc.exists()) {
        console.log('Solicitação já existe para:', user.email);
        return;
      }

      // Cria nova solicitação
      await setDoc(requestRef, {
        email: user.email,
        displayName: user.displayName || 'Não informado',
        photoURL: user.photoURL || '',
        status: 'pending', // pending, approved, rejected
        requestedAt: serverTimestamp(),
        approvedAt: null,
        approvedBy: null
      });

      console.log('Solicitação de acesso registrada para:', user.email);
    } catch (error) {
      console.error('Erro ao registrar solicitação:', error);
      throw error;
    }
  };

  // Login com Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email;
      
      // Verifica se o usuário está autorizado
      const authorized = await checkAuthorization(userEmail);
      setIsAuthorized(authorized);

      // Se não estiver autorizado, registra solicitação de acesso
      if (!authorized) {
        await registerAccessRequest(result.user);
      }

      return { user: result.user, authorized };
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  };

  // Logout
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      setIsAuthorized(false);
    } catch (error) {
      console.error('Erro no logout:', error);
      throw error;
    }
  };

  // Monitorar mudanças no estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        const authorized = await checkAuthorization(currentUser.email);
        setIsAuthorized(authorized);
      } else {
        setIsAuthorized(false);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    isAuthorized,
    loading,
    signInWithGoogle,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

