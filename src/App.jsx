import React from 'react';
import RotatingText from './components/RotatingText';
import Magnet from './components/Magnet';
import Ribbons from './components/Ribbons/Ribbons.jsx';
import ClickSpark from './components/ClickSpark';
import MagicBento from './components/MagicBento/MagicBento';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack/ScrollStack.jsx';
import CircularGallery from './components/CircularGallery/CircularGallery.jsx';
import Waves from './components/Waves/Waves.jsx';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';
import TargetCursor from './components/TargetCursor/TargetCursor.jsx';

function App() {
    const skills = ["React", "Next.js", "JavaScript", "TypeScript", "Framer Motion", "GSAP", "WebGL", "Node.js"];

    const galleryItems = [
      { image: '/AlunoUninassau.png', text: "Portal do Aluno/Uninassau" },
      { image: '/Portifolio.png', text: "Projeto Portfolio" },
      { image: '/FOTOPROJETOSOLAR.png', text: "Projeto SolAr" },
      { image: '/Shild.png', text: "Projeto Shild" },
      { image: '/MINER AI.png', text: "Projeto MINER AI" }
    ];

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
            <TargetCursor targetSelector=".cursor-target" />
            <main>
                <section className="hero-section">
                    <h1>
                        Olá, eu sou Endeson Marcell, <br />
                        <RotatingText texts={["Desenvolvedor Criativo.", "Engenheiro de UI.", "Mago do React."]} />
                    </h1>
                    <p>Especialista em transformar ideias em experiências digitais memoráveis, interativas e performáticas.</p>
                    <Magnet>
                        <a href="#projects" className="cta-button">Conheça meu trabalho</a>
                    </Magnet>
                </section>
                <section id="about">
                    <ProfileCard
                        avatarUrl="/endeson-marcell.png" // Caminho corrigido
                        miniAvatarUrl="/endeson-marcell.png" // Caminho corrigido
                        name="Endeson Marcell"
                        title="Desenvolvedor Criativo"
                        handle="endeson.marcell"
                        onContactClick={() => { window.location.href = 'mailto:endesonmarcell@gmail.com'; }}
                    />
                </section>

                <section id="projects">
                    <h2>Laboratório Interativo</h2>
                    <p style={{ marginBottom: "3rem" }}>Passe o mouse sobre os cards para ver a mágica acontecer. Cada um demonstra uma técnica diferente.</p>
                    <MagicBento />
                </section>
                <section id="featured-projects" style={{ padding: 0, maxWidth: '100vw', height: '100vh', overflow: 'hidden', background: '#060010' }}>
                  <CircularGallery items={galleryItems} />
                </section>
                <section id="skills">
                    <h2>Principais Habilidades</h2>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <Magnet key={index}><div className="skill-item">{skill}</div></Magnet>
                        ))}
                    </div>
                </section>
                <section id="contact">
                    <h2>Vamos Conversar?</h2>
                    <p style={{ marginBottom: "2rem" }}>Estou disponível para novos projetos e colaborações. Me mande uma mensagem!</p>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada! (simulação)'); }}>
                        <input type="text" placeholder="Seu Nome" required />
                        <input type="email" placeholder="Seu E-mail" required />
                        <textarea rows="5" placeholder="Sua Mensagem" required></textarea>
                        <ClickSpark>
                             <Magnet><button type="submit">Enviar Mensagem</button></Magnet>
                        </ClickSpark>
                    </form>
                </section>
            </main>
            <footer>
                <div className="social-links">
                    <a href="https://github.com/endeson12" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/[seu-usuario]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:endesonmarcell@gmail.com">Email</a>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default App; 