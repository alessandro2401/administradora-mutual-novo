// Lista de e-mails autorizados a acessar o sistema
export const AUTHORIZED_EMAILS = [
  'adrielemmbr@gmail.com',
  'alessandro.pizzolatto@gmail.com',
  'alessandro@pizzolatto.com.br',
  'junioftosta@gmail.com',
  'snistro1soma24h@gmail.com',
  'soma24hfinanceiro@gmail.com'
];

// Função para verificar se um e-mail está autorizado
export const isEmailAuthorized = (email) => {
  if (!email) return false;
  return AUTHORIZED_EMAILS.includes(email.toLowerCase());
};

