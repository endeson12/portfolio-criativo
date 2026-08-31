import ProjectMedia from './ProjectMedia';
import TechBadge from './TechBadge';
import './Projects.css';

export default function ProjectShowcase({ project, featured = false }) {
  return (
    <article className={`project-showcase project-showcase--${project.tone}`} aria-labelledby={`${project.slug}-title`}>
      <div className="project-showcase__copy">
        <div className="project-meta"><span>{project.index}</span><span>{project.eyebrow}</span><span className="project-status">{project.status}</span></div>
        <h3 id={`${project.slug}-title`}>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <dl className="project-details">
          <div><dt>Problema</dt><dd>{project.problem}</dd></div>
          <div><dt>Solução</dt><dd>{project.solution}</dd></div>
          <div><dt>Evidência</dt><dd>{project.evidence}</dd></div>
        </dl>
        <div className="project-tech" aria-label="Tecnologias">{project.tech.map((item) => <TechBadge key={item}>{item}</TechBadge>)}</div>
        <div className="project-links">{project.links.map((link, index) => <a className={index ? 'project-link project-link--quiet' : 'project-link'} href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label}<span aria-hidden="true">↗</span></a>)}</div>
      </div>
      <ProjectMedia project={project} priority={featured} />
    </article>
  );
}
