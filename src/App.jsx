import { useMemo, useState } from 'react';
import { cards as initialCards } from './data/cards.js';
import { Carousel } from './components/Carousel.jsx';
import { CompassMark } from './components/CompassMark.jsx';

const particles = Array.from({ length: 42 }, (_, index) => ({
  left: `${(index * 37.7 + 11) % 100}%`,
  top: `${(index * 61.3 + 7) % 100}%`,
  '--delay': `${(index % 11) * -0.83}s`,
  '--duration': `${7 + (index % 9) * 1.7}s`,
  '--size': `${1 + (index % 3) * 0.7}px`,
}));

export default function App() {
  const [activeTab, setActiveTab] = useState('keys');
  const cards = useMemo(() => initialCards, []);

  return (
    <main className="page-shell">
      <div className="scene" aria-hidden="true">
        <div className="scene-image" />
        <div className="scene-wash" />
        <div className="scene-left-shade" />
        <div className="portal-glow" />
        <div className="light-ribbon light-ribbon--one" />
        <div className="light-ribbon light-ribbon--two" />
        <div className="floating-shard floating-shard--one" />
        <div className="floating-shard floating-shard--two" />
        <div className="floating-shard floating-shard--three" />
        <div className="particle-field">
          {particles.map((particle, index) => (
            <i key={index} style={{ ...particle }} />
          ))}
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="/" aria-label="GateUlvan home">
          <CompassMark className="brand__mark" />
          <span className="brand__divider" />
          <span className="brand__name">GateUlvan</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <button
            className={activeTab === 'keys' ? 'is-active' : ''}
            onClick={() => setActiveTab('keys')}
          >
            Keys
          </button>
          <button
            className={activeTab === 'about' ? 'is-active' : ''}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <span className="nav-seal"><CompassMark /></span>
        </nav>
      </header>

      <div className="content-layout">
        <section className={`intro ${activeTab === 'about' ? 'intro--about' : ''}`} aria-live="polite">
          <p className="eyebrow"><span>GATEULVAN</span><i /></p>
          {activeTab === 'keys' ? (
            <>
              <h1>Choose your<br /><em>Key.</em></h1>
              <p className="intro__copy">And step beyond the gates<br />into a greater world.</p>
            </>
          ) : (
            <>
              <h1>Beyond the<br /><em>Gates.</em></h1>
              <p className="intro__copy">A world of knowledge, stories<br />and distant universes awaits.</p>
            </>
          )}
        </section>

        <div className={`destination-panel ${activeTab === 'about' ? 'destination-panel--about' : ''}`}>
          {activeTab === 'keys' ? (
            <Carousel items={cards} />
          ) : (
            <div className="about-panel">
              <span className="about-panel__sigil"><CompassMark /></span>
              <p className="about-panel__eyebrow">ACCESS · EXPLORE · UNDERSTAND</p>
              <h2>Every key opens<br />a different truth.</h2>
              <p className="about-panel__copy">
                GateUlvan is a passage into connected worlds — a place for ideas,
                discoveries and personal records. Choose a key and begin exploring.
              </p>
              <button className="about-panel__back" onClick={() => setActiveTab('keys')}>
                <span>Return to Keys</span><b>→</b>
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-brand"><span>GATEULVAN</span><small>Access. Explore. Understand.</small></div>
        <p>Beyond the gates lies the truth.</p>
        <CompassMark className="footer-mark" />
      </footer>
      <span className="scroll-cue" aria-hidden="true"><i />SCROLL</span>
    </main>
  );
}
