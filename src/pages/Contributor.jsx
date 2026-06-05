import { useState } from 'react';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import Contact from '../components/Contact';

const Contributor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'individual',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', type: 'individual', message: '' });
    }, 3000);
  };

  const contributionTypes = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Compartilhe Dados',
      description: 'Se você possui uma estação meteorológica ou sensores ambientais, pode contribuir compartilhando dados locais para enriquecer nossa rede de monitoramento.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Apoie Pesquisa',
      description: 'Instituições de pesquisa podem se tornar parceiras, acessando dados prioritários e colaborando em estudos climáticos avançados.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Seja um Parceiro',
      description: 'Organizações podem integrar nossos dados e alertas em seus sistemas, criando soluções inovadoras de prevenção de desastres.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.766-.417z" />
        </svg>
      ),
      title: 'Divulgue Nossa Missão',
      description: 'Compartilhe nosso trabalho nas redes sociais e ajude a conscientizar mais pessoas sobre a importância do monitoramento ambiental preventivo.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        title="Faça Parte Desta Missão"
        subtitle="Existem diversas formas de contribuir com o monitoramento ambiental e a prevenção de desastres naturais. Escolha como você quer fazer a diferença."
      />

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributionTypes.map((type, index) => (
              <div key={index} className="card text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  {type.icon}
                </div>
                <h3 className="font-semibold text-text-primary text-lg mb-2">{type.title}</h3>
                <p className="text-sm text-text-secondary">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Por Que Contribuir?"
            subtitle="Sua contribuição ajuda a construir um futuro mais seguro e consciente ambientalmente."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Impacto Global</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Sua contribuição alimenta dados que são usados por governos e organizações para tomar decisões que protegem comunidades inteiras.
              </p>
            </div>

            <div className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Comunidade</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Junte-se a uma rede global de cientistas, organizações e cidadãos comprometidos com a prevenção de desastres ambientais.
              </p>
            </div>

            <div className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Inovação</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Contribua com o desenvolvimento de novas tecnologias de monitoramento e análise ambiental preventiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Entre em Contato"
            subtitle="Queremos ouvir de você. Preencha o formulário abaixo e entraremos em contato."
          />

          {submitted ? (
            <div className="card text-center border-2 border-success">
              <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-bold text-text-primary mb-2">Mensagem Enviada!</h3>
              <p className="text-text-secondary">Entraremos em contato em breve. Obrigado pelo seu interesse.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card border-2 border-secondary/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-secondary text-text-primary focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-secondary text-text-primary focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="type" className="block text-sm font-medium text-text-secondary mb-2">
                  Tipo de Contribuição
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-secondary text-text-primary focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300"
                >
                  <option value="individual">Individual</option>
                  <option value="research">Instituição de Pesquisa</option>
                  <option value="organization">Organização</option>
                  <option value="company">Empresa</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-secondary text-text-primary focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 resize-none"
                  placeholder="Como você gostaria de contribuir?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold py-4 rounded-lg hover:from-secondary-light hover:to-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/40 transform hover:-translate-y-0.5"
              >
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </section>

      <Contact title="Juntos Fazemos a Diferença" description="Cada contribuição, por menor que seja, ajuda a construir um futuro mais seguro e sustentável para todos." buttonText="Voltar para Home" buttonLink="/" variant="primary"/>
    </div>
  );
};

export default Contributor;