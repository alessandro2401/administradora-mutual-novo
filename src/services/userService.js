import { collection, doc, getDoc, setDoc, getDocs, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const AUTHORIZED_USERS_COLLECTION = 'authorized_users';
const PENDING_REQUESTS_COLLECTION = 'pending_requests';

// Verificar se usuário está autorizado
export const checkUserAuthorization = async (email) => {
  try {
    const userDoc = await getDoc(doc(db, AUTHORIZED_USERS_COLLECTION, email));
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

// Criar solicitação de acesso
export const createAccessRequest = async (userEmail, userName) => {
  try {
    const requestData = {
      email: userEmail,
      name: userName,
      requestedAt: new Date().toISOString(),
      status: 'pending'
    };
    
    await setDoc(doc(db, PENDING_REQUESTS_COLLECTION, userEmail), requestData);
    return { success: true };
  } catch (error) {
    console.error('Erro ao criar solicitação:', error);
    return { success: false, error };
  }
};

// Listar todas as solicitações pendentes
export const getPendingRequests = async () => {
  try {
    const q = query(
      collection(db, PENDING_REQUESTS_COLLECTION),
      where('status', '==', 'pending')
    );
    const querySnapshot = await getDocs(q);
    const requests = [];
    querySnapshot.forEach((doc) => {
      requests.push({ id: doc.id, ...doc.data() });
    });
    return requests;
  } catch (error) {
    console.error('Erro ao listar solicitações:', error);
    return [];
  }
};

// Aprovar usuário
export const approveUser = async (email) => {
  try {
    // Adicionar à lista de autorizados
    await setDoc(doc(db, AUTHORIZED_USERS_COLLECTION, email), {
      approved: 'true',
      approvedAt: new Date().toISOString()
    });
    
    // Atualizar status da solicitação
    const requestDoc = doc(db, PENDING_REQUESTS_COLLECTION, email);
    await updateDoc(requestDoc, {
      status: 'approved',
      approvedAt: new Date().toISOString()
    });
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao aprovar usuário:', error);
    return { success: false, error };
  }
};

// Rejeitar usuário
export const rejectUser = async (email) => {
  try {
    const requestDoc = doc(db, PENDING_REQUESTS_COLLECTION, email);
    await updateDoc(requestDoc, {
      status: 'rejected',
      rejectedAt: new Date().toISOString()
    });
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao rejeitar usuário:', error);
    return { success: false, error };
  }
};

// Listar todos os usuários autorizados
export const getAuthorizedUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, AUTHORIZED_USERS_COLLECTION));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, email: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error('Erro ao listar usuários autorizados:', error);
    return [];
  }
};

// Remover usuário autorizado
export const removeAuthorizedUser = async (email) => {
  try {
    await deleteDoc(doc(db, AUTHORIZED_USERS_COLLECTION, email));
    return { success: true };
  } catch (error) {
    console.error('Erro ao remover usuário:', error);
    return { success: false, error };
  }
};

