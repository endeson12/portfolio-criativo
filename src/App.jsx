import React from 'react';
import RotatingText from './components/RotatingText';
import Magnet from './components/Magnet';
import Ribbons from './components/Ribbons/Ribbons.jsx';
import ClickSpark from './components/ClickSpark';
import MagicBento from './components/MagicBento/MagicBento';
import Waves from './components/Waves/Waves.jsx';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';

function App() {
    const skillGroups = [
      { title: 'Backend', items: ['Python', 'FastAPI', 'APIs REST'] },
      { title: 'Automação e DevOps', items: ['Automação', 'Linux', 'Docker', 'CI/CD'] },
      { title: 'Operação', items: ['Observabilidade', 'Git', 'GitHub Actions'] },
      { title: 'Frontend complementar', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
    ];

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
        <React.Fragment>
            <Waves 
                lineColor="rgba(132, 0, 255, 0.1)" 
                waveAmpX={20}
                waveAmpY={10}
                xGap={20}
                yGap={20}
            />
            <Ribbons 
                colors={['#5227FF', '#FC8EAC', '#21c5f0']}
                baseThickness={25}
                maxAge={800}
            />
            <main>
                <section className="hero-section">
                    <h1>
                        Olá, eu sou Endeson Marcell, <br />
                        <RotatingText texts={["Backend Python.", "Automação.", "Linux & DevOps."]} />
                    </h1>
                    <p>Desenvolvo APIs com Python e FastAPI, automações e ambientes confiáveis com Linux, Docker, integração contínua e observabilidade.</p>
                    <Magnet>
                        <a href="#projects" className="cta-button">Conheça meu trabalho</a>
                    </Magnet>
                </section>
                <section id="about">
                    <ProfileCard
                        avatarUrl="/endeson-marcell.png"
                        miniAvatarUrl="/endeson-marcell.png"
                        name="Endeson Marcell"
                        title="Backend Python • Automação • DevOps"
                        handle="endeson.marcell"
                        onContactClick={() => { window.location.href = 'mailto:endesonmarcell@gmail.com'; }}
                    />
                </section>

                <section className="about-copy" aria-labelledby="about-title">
                    <p className="section-kicker">Sobre</p>
                    <h2 id="about-title">Software que funciona além da interface</h2>
                    <p>Meu foco está no backend: APIs em Python e FastAPI, automação de rotinas e práticas de Linux/DevOps para executar, integrar e observar aplicações. Docker, CI e observabilidade fazem parte desse caminho. Frontend é uma competência complementar, usada para entregar experiências completas quando o projeto pede.</p>
                </section>

                <section id="projects">
                    <p className="section-kicker">Trabalho real</p>
                    <h2>Projetos selecionados</h2>
                    <p style={{ marginBottom: "3rem" }}>Backend e infraestrutura em primeiro plano, com produtos web que também mostram minha atuação complementar no frontend.</p>
                    <MagicBento />
                </section>
                <section id="skills">
                    <p className="section-kicker">Stack</p>
                    <h2>Principais habilidades</h2>
                    <div className="skill-groups">
                        {skillGroups.map((group) => (
                          <article className="skill-group" key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="skills-container">
                              {group.items.map((skill) => (
                                <Magnet key={skill}><div className="skill-item">{skill}</div></Magnet>
                              ))}
                            </div>
                          </article>
                        ))}
                    </div>
                </section>
                <section id="contact">
                    <h2>Vamos Conversar?</h2>
                    <p style={{ marginBottom: "2rem" }}>Estou disponível para novos projetos e colaborações. Me mande uma mensagem!</p>
                    <form onSubmit={handleContactSubmit}>
                        <input name="name" type="text" placeholder="Seu Nome" required />
                        <input name="email" type="email" placeholder="Seu E-mail" required />
                        <textarea name="message" rows="5" placeholder="Sua Mensagem" required></textarea>
                        <ClickSpark>
                             <Magnet><button type="submit">Enviar Mensagem</button></Magnet>
                        </ClickSpark>
                    </form>
                </section>
            </main>
            <footer>
                <div className="social-links">
                    <a href="https://github.com/endeson12" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://endesonportifolio.netlify.app/" target="_blank" rel="noopener noreferrer">Portfólio</a>
                    <a href="mailto:endesonmarcell@gmail.com">Email</a>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default App;
