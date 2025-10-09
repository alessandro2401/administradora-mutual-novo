import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('loading');
    
    try {
      // Aqui você pode integrar com um serviço de envio de e-mails
      // Por exemplo: EmailJS, Formspree, ou sua própria API
      
      // Simulação de envio (remover em produção)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Exemplo de integração com FormSubmit (gratuito)
      const response = await fetch('https://formsubmit.co/ajax/contato@administradoramutual.com.br', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Novo contato de ${formData.name}`,
          _template: 'table'
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Resetar status após 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
        
        // Enviar evento para Google Analytics
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Submission'
          });
        }
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar erro do campo ao digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome Completo"
          className={`w-full px-4 py-2 rounded-md bg-white/20 border ${
            errors.name ? 'border-red-400' : 'border-white/30'
          } text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
          disabled={status === 'loading'}
        />
        {errors.name && (
          <p className="text-red-200 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className={`w-full px-4 py-2 rounded-md bg-white/20 border ${
            errors.email ? 'border-red-400' : 'border-white/30'
          } text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p className="text-red-200 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensagem"
          rows="4"
          className={`w-full px-4 py-2 rounded-md bg-white/20 border ${
            errors.message ? 'border-red-400' : 'border-white/30'
          } text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50`}
          disabled={status === 'loading'}
        ></textarea>
        {errors.message && (
          <p className="text-red-200 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <Button 
        type="submit"
        className="w-full bg-white text-blue-600 hover:bg-gray-100"
        disabled={status === 'loading'}
      >
        {status === 'loading' && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {status === 'success' && (
          <CheckCircle className="mr-2 h-4 w-4" />
        )}
        {status === 'loading' ? 'Enviando...' : 
         status === 'success' ? 'Mensagem Enviada!' : 
         'Enviar Mensagem'}
      </Button>

      {status === 'error' && (
        <p className="text-red-200 text-sm text-center">
          Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por e-mail.
        </p>
      )}
    </form>
  );
}

