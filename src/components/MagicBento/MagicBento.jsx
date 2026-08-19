import './MagicBento.css';

const projects = [
  {
    name: 'DevOps FastAPI Lab',
    label: 'Backend • DevOps',
    description: 'Laboratório prático de API com FastAPI, containerização, integração contínua e observabilidade.',
    link: 'https://github.com/endeson12/devops-fastapi-lab',
    cta: 'Ver código no GitHub',
    featured: true,
  },
  {
    name: 'SolAr',
    label: 'Projeto web',
    description: 'Projeto publicado na web que complementa o portfólio com uma experiência visual acessível pelo navegador.',
    link: 'https://endeson12.github.io/projeto-solar-liga-jovem/',
    cta: 'Acessar projeto',
  },
  {
    name: 'RecargaJá',
    label: 'Projeto web',
    description: 'Aplicação web publicada e disponível para navegação, demonstrando a entrega de uma interface funcional.',
    link: 'https://endeson12.github.io/recarga-ja/',
    cta: 'Acessar projeto',
  },
  {
    name: 'Portfólio Criativo',
    label: 'Frontend complementar',
    description: 'Este portfólio: uma apresentação responsiva e interativa construída para reunir projetos e competências.',
    link: 'https://endesonportifolio.netlify.app/',
    cta: 'Ver site publicado',
    featured: true,
  },
];

const MagicBento = () => {
    return (
        <div className="card-grid">
          {projects.map((project) => (
            <a
              className={`card card--border-glow${project.featured ? ' card-span-2' : ''}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.name}
            >
              <div className="card__header">
                <div className="card__label">{project.label}</div>
                <span className="card__arrow" aria-hidden="true">↗</span>
              </div>
              <div className="card__content">
                <h3 className="card__title">{project.name}</h3>
                <p className="card__description">{project.description}</p>
                <span className="card__cta">{project.cta}</span>
              </div>
            </a>
          ))}
        </div>
    );
};

export default MagicBento;
