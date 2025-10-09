import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Eduardo Silva",
    role: "Presidente",
    company: "Associação Proteção Veicular ABC",
    image: "https://ui-avatars.com/api/?name=Carlos+Eduardo&background=4169E1&color=fff&size=128",
    content: "A Administradora Mutual foi fundamental para nossa adequação à LC 213/2025. A equipe demonstrou profundo conhecimento técnico e nos guiou em cada etapa do processo de regularização.",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Fernanda Costa",
    role: "Diretora Financeira",
    company: "Mutual Proteção Patrimonial XYZ",
    image: "https://ui-avatars.com/api/?name=Maria+Fernanda&background=8B5CF6&color=fff&size=128",
    content: "Excelente gestão atuarial e de riscos. Os relatórios são claros e precisos, permitindo tomadas de decisão embasadas. Recomendo fortemente os serviços da Administradora Mutual.",
    rating: 5
  },
  {
    id: 3,
    name: "Roberto Almeida",
    role: "Diretor Operacional",
    company: "Associação Mutual Segura",
    image: "https://ui-avatars.com/api/?name=Roberto+Almeida&background=10B981&color=fff&size=128",
    content: "A plataforma tecnológica oferecida facilitou muito nossa operação. O sistema de gestão de sinistros é intuitivo e eficiente. Nossa produtividade aumentou significativamente.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600">
            Depoimentos de associações que confiam em nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote className="h-12 w-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t pt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer fazer parte desses cases de sucesso?
          </p>
          <a 
            href="#contato"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}

