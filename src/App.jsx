import { useState } from 'react';
import { projects } from './data/projects.js';

const navItems = [
  ['Projetos', '#projetos'],
  ['Experiência', '#experiencia'],
  ['Sobre', '#sobre'],
  ['Contato', '#contato'],
];

const capabilities = [
  { title: 'Sistemas empresariais', text: 'Aplicações internas, autenticação, perfis de acesso e fluxos que acompanham a operação real.', proof: 'Financial Document Automation' },
  { title: 'Backend e integrações', text: 'Python, FastAPI, APIs REST, PostgreSQL, Supabase, PostGIS, webhooks e automações.', proof: 'Geo Intelligence API' },
  { title: 'Operação e confiabilidade', text: 'Linux, Docker, CI, HTTPS, logs, métricas, backup, recuperação e documentação operacional.', proof: 'DevOps FastAPI Lab' },
  { title: 'Desenvolvimento AI-first', text: 'Especificação, decomposição, implementação assistida, revisão crítica, testes e validação humana.', proof: 'Projetos empresariais' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\nNome: ${name}\nE-mail: ${email}`);
    window.location.href = `mailto:endesonmarcell@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início"><span>EM</span><strong>Endeson Marcell</strong></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Abrir menu</span><i></i><i></i>
        </button>
        <nav id="main-nav" className={menuOpen ? 'nav-open' : ''} aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cv" href="/curriculo-endeson-marcell.pdf" download>Currículo</a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> Desenvolvedor AI-first · Teresina/PI · Remoto</p>
            <h1>Desenvolvo sistemas empresariais, APIs e automações <em>com IA.</em></h1>
            <p className="hero-lead">Transformo processos manuais em aplicações seguras e operáveis — da necessidade ao deploy, com testes, documentação e sustentação.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">Ver projetos</a>
              <a className="button secondary" href="#contato">Falar comigo</a>
              <a className="text-link" href="/curriculo-endeson-marcell.pdf" download>Baixar currículo <span>↓</span></a>
            </div>
            <ul className="hero-facts" aria-label="Resumo de competências">
              <li><strong>6</strong><span>projetos apresentados</span></li>
              <li><strong>Python · React</strong><span>backend e interfaces</span></li>
              <li><strong>Linux · Docker</strong><span>entrega e operação</span></li>
            </ul>
          </div>
          <div className="hero-visual" aria-label="Foto profissional de Endeson Marcell">
            <div className="portrait-glow"></div>
            <img src="/endeson-hero.webp" alt="Endeson Marcell" width="1200" height="1500" fetchPriority="high" />
            <div className="availability"><span></span><div><small>Disponível para</small><strong>oportunidades remotas</strong></div></div>
            <div className="hero-code" aria-hidden="true"><span>API</span><span>AUTOMAÇÃO</span><span>DEVOPS</span></div>
          </div>
        </section>

        <section className="intro" id="sobre">
          <div><p className="section-label">Sobre</p><h2>Tecnologia ligada ao problema real.</h2></div>
          <p>Sou desenvolvedor e estudante de Análise e Desenvolvimento de Sistemas. Construo soluções completas para rotinas administrativas e empresariais: entendo a demanda, estruturo requisitos, desenvolvo, testo, publico e acompanho o uso. IA acelera o processo; engenharia, segurança e validação sustentam o resultado.</p>
        </section>

        <section className="projects-section" id="projetos">
          <div className="section-heading">
            <div><p className="section-label">Projetos selecionados</p><h2>Sistemas reais, evidência visível.</h2></div>
            <p>Projetos públicos e estudos sanitizados. O que é privado permanece privado; arquitetura, decisões e resultados verificáveis ficam visíveis.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card tone-${project.tone} ${index < 2 ? 'project-featured' : ''}`} key={project.slug}>
                <a className="project-media" href={project.links[0].href} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}>
                  <img src={project.media} alt={project.mediaAlt} width="1600" height="900" loading="eager" onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement.classList.add('media-fallback'); }} />
                  <span className="project-number">{project.index}</span>
                </a>
                <div className="project-body">
                  <div className="project-meta"><span>{project.eyebrow}</span><span className="project-status">{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tech-list" aria-label="Tecnologias">{project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <details>
                    <summary>Ver decisões e evidências</summary>
                    <dl><div><dt>Problema</dt><dd>{project.problem}</dd></div><div><dt>Solução</dt><dd>{project.solution}</dd></div><div><dt>Evidência</dt><dd>{project.evidence}</dd></div></dl>
                  </details>
                  <div className="project-links">{project.links.map((link, linkIndex) => <a className={linkIndex === 0 ? 'project-primary' : ''} key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span>↗</span></a>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experiencia">
          <div className="section-heading compact"><div><p className="section-label">Experiência e formação</p><h2>Construção com contexto de operação.</h2></div></div>
          <div className="timeline">
            <article><span className="timeline-dot"></span><div className="timeline-date">OUT 2024 — ATUAL</div><h3>Especialista em TI</h3><h4>Mais Saúde Distribuidora</h4><p>Apoio à operação, usuários, infraestrutura e dados. Transformação de necessidades administrativas em soluções digitais, automações e melhorias sustentáveis.</p></article>
            <article><span className="timeline-dot"></span><div className="timeline-date">EM ANDAMENTO</div><h3>Análise e Desenvolvimento de Sistemas</h3><h4>UNINASSAU</h4><p>Formação superior focada em desenvolvimento, arquitetura, dados e engenharia de software.</p></article>
            <article><span className="timeline-dot"></span><div className="timeline-date">CONCLUÍDO</div><h3>Tecnologia da Informação</h3><h4>SENAC</h4><p>Formação técnica que sustenta a atuação em sistemas, infraestrutura e suporte.</p></article>
          </div>
        </section>

        <section className="capabilities-section" id="competencias">
          <div className="section-heading compact"><div><p className="section-label">Competências comprovadas</p><h2>Não é uma lista de ferramentas. É capacidade de entrega.</h2></div></div>
          <div className="capability-grid">{capabilities.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><small>Evidência: {item.proof}</small></article>)}</div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-copy"><p className="section-label">Contato</p><h2>Tem um processo manual ou sistema que precisa sair do papel?</h2><p>Conte o contexto. Eu retorno pelo e-mail informado para entender o problema e o próximo passo.</p><div className="direct-links"><a href="mailto:endesonmarcell@gmail.com">endesonmarcell@gmail.com</a><a href="https://www.linkedin.com/in/endeson12/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/endeson12" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
          <form onSubmit={handleContactSubmit}><label>Nome<input name="name" type="text" autoComplete="name" required placeholder="Como posso chamar você?" /></label><label>E-mail<input name="email" type="email" autoComplete="email" required placeholder="voce@empresa.com" /></label><label>Objetivo ou mensagem<textarea name="message" rows="5" required placeholder="Explique brevemente o que precisa resolver."></textarea></label><button type="submit">Enviar mensagem <span>↗</span></button></form>
        </section>
      </main>
      <footer><div><a className="brand" href="#inicio"><span>EM</span><strong>Endeson Marcell</strong></a><p>Desenvolvedor AI-first · sistemas, APIs e automações.</p></div><div><a href="https://github.com/endeson12" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/endeson12/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:endesonmarcell@gmail.com">E-mail</a></div></footer>
    </>
  );
}

export default App;
