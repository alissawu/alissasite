'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PhotoCarousel.module.css';

interface Photo {
  src: string;
  title: string;
  description: string;
  date?: string;
}

interface PhotoCarouselProps {
  basePath: string;
  photos: Photo[];
}

export default function PhotoCarousel({ basePath, photos }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  if (photos.length === 0) return null;

  const current = photos[currentIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.viewer}>
        <button
          className={styles.navButton}
          onMouseDown={goToPrevious}
          aria-label="Previous photo"
        >
          &lt;
        </button>

        <div className={styles.imageContainer} onClick={openLightbox}>
          {photos.map((photo, index) => (
            <Image
              key={photo.src}
              src={basePath + photo.src}
              alt={photo.title}
              fill
              style={{
                objectFit: 'contain',
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 0.15s ease',
                cursor: 'pointer'
              }}
              priority={index < 3}
            />
          ))}
        </div>

        <button
          className={styles.navButton}
          onMouseDown={goToNext}
          aria-label="Next photo"
        >
          &gt;
        </button>
      </div>

      {current.date && (
        <div className={styles.date}>{current.date}</div>
      )}

      <div className={styles.title}>{current.title}</div>

      <p className={styles.description}>{current.description}</p>

      <div className={styles.indicator}>
        {currentIndex + 1} / {photos.length}
      </div>

      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            &times;
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={basePath + current.src}
              alt={current.title}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
