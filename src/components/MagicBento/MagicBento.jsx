import React from 'react';
import TiltedCard from '../TiltedCard/TiltedCard';
import PixelTransition from '../PixelTransition/PixelTransition.jsx';
import './MagicBento.css';

const MagicBento = () => {
    return (
        <div className="card-grid">
            <div className="card card--border-glow card-span-2">
                <TiltedCard imageSrc="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop" />
            </div>
            <div className="card card--border-glow">
                <PixelTransition
                  gridSize={10}
                  firstContent={
                    <div style={{ padding: '1rem', textAlign: 'center' }}>
                      <h4>Performance</h4>
                      <p>Passe o mouse aqui!</p>
                    </div>
                  }
                  secondContent={
                    <div style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#222', height: '100%' }}>
                      <img src="/avatar-baruk-anime.png" alt="Avatar Baruk Anime" className="pixel-img" />
                      <h4>Revelado!</h4>
                      <p>Efeito de transição de pixels.</p>
                    </div>
                  }
                />
            </div>
            <div className="card card--border-glow">
                 <div className="card__header"><div className="card__label">Design</div></div>
                <div className="card__content">
                    <h3 className="card__title">UI/UX</h3>
                    <p className="card__description">Interfaces intuitivas e elegantes.</p>
                </div>
            </div>
             <div className="card card--border-glow card-span-2">
                 <div className="card__header"><div className="card__label">Responsivo</div></div>
                <div className="card__content">
                    <h3 className="card__title">Multi-plataforma</h3>
                    <p className="card__description">Design adaptável para todos os dispositivos, do mobile ao desktop.</p>
                </div>
            </div>
        </div>
    );
};

export default MagicBento; 