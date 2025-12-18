'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PanelCarousel.module.css';

interface Panel {
  src: string;
  description: string;
}

interface PanelCarouselProps {
  title: string;
  panels: Panel[];
}

export default function PanelCarousel({ title, panels }: PanelCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? panels.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === panels.length - 1 ? 0 : prev + 1));
  };

  if (panels.length === 0) return null;

  return (
    <div className={styles.carousel}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.viewer}>
        <button
          className={styles.navButton}
          onMouseDown={goToPrevious}
          aria-label="Previous panel"
        >
          &lt;
        </button>

        <div className={styles.imageContainer}>
          {/* Render all images, only show current one */}
          {panels.map((panel, index) => (
            <Image
              key={panel.src}
              src={panel.src}
              alt={panel.description}
              fill
              style={{
                objectFit: 'contain',
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 0.15s ease'
              }}
              priority={index < 3}
            />
          ))}
        </div>

        <button
          className={styles.navButton}
          onMouseDown={goToNext}
          aria-label="Next panel"
        >
          &gt;
        </button>
      </div>

      <p className={styles.description}>{panels[currentIndex].description}</p>

      <div className={styles.indicator}>
        {currentIndex + 1} / {panels.length}
      </div>
    </div>
  );
}
