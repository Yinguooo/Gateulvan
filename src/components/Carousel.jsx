import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CardSymbol } from './CardSymbol.jsx';

function wrap(index, length) {
  return ((index % length) + length) % length;
}

function signedDistance(index, active, length) {
  let distance = wrap(index - active, length);
  if (distance > length / 2) distance -= length;
  return distance;
}

export function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    setActiveIndex((current) => items.length ? current % items.length : 0);
  }, [items.length]);

  const go = useCallback((step) => {
    if (!items.length) return;
    setActiveIndex((current) => wrap(current + step, items.length));
  }, [items.length]);

  const visibleItems = useMemo(() => {
    if (!items.length) return [];
    return items
      .map((item, index) => ({ item, index, distance: signedDistance(index, activeIndex, items.length) }))
      .filter(({ distance }) => Math.abs(distance) <= 1)
      .sort((a, b) => a.distance - b.distance);
  }, [activeIndex, items]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [go]);

  const handlePointerDown = (event) => {
    touchStart.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (touchStart.current === null) return;
    const delta = event.clientX - touchStart.current;
    if (Math.abs(delta) > 42) go(delta < 0 ? 1 : -1);
    touchStart.current = null;
  };

  if (!items.length) return <p className="empty-state">No keys have been added yet.</p>;

  return (
    <section className="carousel-shell" aria-label="Choose a key">
      <div className="orbit orbit--outer" aria-hidden="true" />
      <div className="orbit orbit--inner" aria-hidden="true" />
      <div className="orbit-star" aria-hidden="true">✧</div>

      <button className="carousel-arrow carousel-arrow--left" onClick={() => go(-1)} aria-label="Previous card">
        <span aria-hidden="true">‹</span>
      </button>

      <div
        className="carousel-stage"
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { touchStart.current = null; }}
      >
        {visibleItems.map(({ item, index, distance }) => {
          const isActive = distance === 0;
          const style = { '--distance': distance };
          return (
            <a
              key={item.id}
              href={item.href}
              className={`key-card ${isActive ? 'is-active' : 'is-side'} ${distance < 0 ? 'is-left' : 'is-right'}`}
              style={style}
              aria-current={isActive ? 'true' : undefined}
              aria-label={`${item.title}: ${item.subtitle}`}
              tabIndex={isActive || Math.abs(distance) === 1 ? 0 : -1}
            >
              <span className="key-card__number">{item.number || String(index + 1).padStart(2, '0')}</span>
              <span className="key-card__symbol-wrap"><CardSymbol type={item.symbol} /></span>
              <span className="key-card__title">{item.title}</span>
              <span className="key-card__subtitle">{item.subtitle}</span>
              <span className="key-card__seal" aria-hidden="true">✧</span>
              <span className="key-card__shine" aria-hidden="true" />
            </a>
          );
        })}
      </div>

      <button className="carousel-arrow carousel-arrow--right" onClick={() => go(1)} aria-label="Next card">
        <span aria-hidden="true">›</span>
      </button>

      <div className="carousel-pagination" aria-label="Carousel pages">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={`pagination-dot ${index === activeIndex ? 'is-active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${item.title}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}
