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
          onClick={goToPrevious}
          aria-label="Previous panel"
        >
          &lt;
        </button>

        <div className={styles.imageContainer}>
          <Image
            src={panels[currentIndex].src}
            alt={panels[currentIndex].description}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <button
          className={styles.navButton}
          onClick={goToNext}
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
