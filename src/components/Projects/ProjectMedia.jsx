export default function ProjectMedia({ project, priority = false }) {
  return (
    <figure className={`project-media project-media--${project.tone}`}>
      <div className="project-media__chrome" aria-hidden="true"><i /><i /><i /><span>secure preview / {project.slug}</span></div>
      <img src={project.media} alt={project.mediaAlt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} width="960" height="620" />
      <figcaption><span className="signal-dot" aria-hidden="true" /> Preview sanitizado · sem dados sensíveis</figcaption>
    </figure>
  );
}
