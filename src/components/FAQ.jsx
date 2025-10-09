import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "O que é a LC 213/2025 e como ela afeta minha associação?",
    answer: "A LC 213/2025 é o novo marco regulatório para operações de proteção patrimonial mutualista. Ela estabelece regras claras para o funcionamento de associações, exigindo adequação de estatutos, contratação de administradora autorizada pela SUSEP e cumprimento de normas técnicas e atuariais. Todas as associações devem se adequar para operar legalmente."
  },
  {
    id: 2,
    question: "Quais são as fases de adequação à regulamentação?",
    answer: "O processo tem 3 fases: Fase I (Cadastramento) já foi concluída em 15/07/2025. Fase II (Regulamentação) está em andamento, onde o CNSP define critérios para autorização de administradoras. Fase III (Regularidade) ocorrerá após a contratação de administradora autorizada, quando as associações receberão status 'Regular' perante a SUSEP."
  },
  {
    id: 3,
    question: "Quanto custa contratar os serviços da Administradora Mutual?",
    answer: "Os valores variam conforme o porte da associação, número de associados, volume de sinistros e serviços contratados. Oferecemos consultoria gratuita inicial para avaliar suas necessidades e apresentar uma proposta personalizada. Entre em contato para receber um orçamento sem compromisso."
  },
  {
    id: 4,
    question: "Qual o prazo para adequação completa à LC 213/2025?",
    answer: "O prazo final ainda será definido pelo CNSP na Fase II da regulamentação. No entanto, recomendamos iniciar o processo de adequação o quanto antes, pois envolve alterações estatutárias, adequação de processos e contratação de administradora autorizada. O processo completo pode levar de 3 a 6 meses."
  },
  {
    id: 5,
    question: "A Administradora Mutual já está autorizada pela SUSEP?",
    answer: "Estamos em processo de autorização junto à SUSEP, seguindo todos os requisitos estabelecidos pela regulamentação. Nossa equipe técnica está preparada e atende todos os critérios exigidos, incluindo atuário certificado, estrutura operacional completa e sistemas de gestão adequados."
  },
  {
    id: 6,
    question: "Quais serviços estão incluídos na administração completa?",
    answer: "A administração completa inclui: gestão de sinistros e indenizações, controle financeiro e contábil, cálculo de provisões técnicas, estudos atuariais, relatórios gerenciais, compliance regulatório, plataforma tecnológica, portal do associado e suporte operacional completo."
  },
  {
    id: 7,
    question: "Como funciona a gestão atuarial e de riscos?",
    answer: "Nossa equipe de atuários certificados realiza estudos de precificação, dimensionamento de reservas técnicas (PSL, IBNR), análise de sinistralidade, projeções financeiras e avaliação de solvência. Todos os cálculos seguem normas da SUSEP e garantem a sustentabilidade da operação."
  },
  {
    id: 8,
    question: "Posso contratar apenas alguns serviços específicos?",
    answer: "Sim! Oferecemos serviços modulares. Você pode contratar apenas consultoria regulatória, gestão atuarial, tecnologia ou qualquer combinação de serviços. No entanto, para associações que precisam de administradora autorizada, recomendamos o pacote completo para garantir conformidade total."
  }
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 pr-8">
          {faq.question}
        </span>
        <ChevronDown 
          className={`h-5 w-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre proteção patrimonial mutualista e nossos serviços
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <a 
            href="#contato"
            className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
}

