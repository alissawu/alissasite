'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import styles from './PanelCarousel.module.css';

interface Panel {
  src: string;
  description: string;
  chapter: number | string;
}

interface PanelCarouselProps {
  title: string;
  slug: string;
  panels: Panel[];
}

export default function PanelCarousel({ title, slug, panels }: PanelCarouselProps) {
  const basePath = `/blog/manga/${slug}/`;
  const storageKey = `alissasite-manga-${slug}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [spoilerEnabled, setSpoilerEnabled] = useState(false);
  const [maxChapterInput, setMaxChapterInput] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Derive numeric value for filtering (empty = show all)
  const maxChapter = maxChapterInput === '' ? Infinity : (parseInt(maxChapterInput) || 0);

  // Load spoiler settings from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const { enabled, max } = JSON.parse(saved);
        setSpoilerEnabled(enabled ?? false);
        setMaxChapterInput(max?.toString() ?? '');
      }
    } catch {
      // Ignore parse errors
    }
    setLoaded(true);
  }, [storageKey]);

  // Save spoiler settings to localStorage
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ enabled: spoilerEnabled, max: maxChapterInput === '' ? null : parseInt(maxChapterInput) }));
    } catch {
      // Ignore storage errors
    }
  }, [spoilerEnabled, maxChapterInput, storageKey, loaded]);

  // Filter panels based on spoiler settings
  const filteredPanels = useMemo(() => {
    if (!spoilerEnabled) return panels;
    return panels.filter(panel => {
      const ch = typeof panel.chapter === 'string' ? parseInt(panel.chapter) : panel.chapter;
      return ch <= maxChapter;
    });
  }, [panels, spoilerEnabled, maxChapter]);

  // Reset index if it's out of bounds after filtering
  useEffect(() => {
    if (currentIndex >= filteredPanels.length) {
      setCurrentIndex(Math.max(0, filteredPanels.length - 1));
    }
  }, [filteredPanels.length, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredPanels.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === filteredPanels.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  // Close on escape key
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

  if (panels.length === 0) return null;
  if (filteredPanels.length === 0) {
    return (
      <div className={styles.carousel}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.spoilerControls}>
          <label className={styles.spoilerLabel}>
            <input
              type="checkbox"
              checked={spoilerEnabled}
              onChange={(e) => setSpoilerEnabled(e.target.checked)}
            />
            Hide panels past chapter
          </label>
          {spoilerEnabled && (
            <input
              type="text"
              inputMode="numeric"
              className={styles.chapterInput}
              value={maxChapterInput}
              onChange={(e) => setMaxChapterInput(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder=""
            />
          )}
        </div>
        <p className={styles.noSpoilers}>All panels hidden (past chapter {maxChapterInput || '?'})</p>
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.spoilerControls}>
        <label className={styles.spoilerLabel}>
          <input
            type="checkbox"
            checked={spoilerEnabled}
            onChange={(e) => setSpoilerEnabled(e.target.checked)}
          />
          Hide panels past chapter
        </label>
        {spoilerEnabled && (
          <input
            type="text"
            inputMode="numeric"
            className={styles.chapterInput}
            value={maxChapterInput}
            onChange={(e) => setMaxChapterInput(e.target.value.replace(/[^0-9]/g, ''))}
            placeholder="all"
          />
        )}
      </div>

      <div className={styles.viewer}>
        <button
          className={styles.navButton}
          onMouseDown={goToPrevious}
          aria-label="Previous panel"
        >
          &lt;
        </button>

        <div className={styles.imageContainer} onClick={openLightbox}>
          {/* Render all images, only show current one */}
          {filteredPanels.map((panel, index) => (
            <Image
              key={panel.src}
              src={basePath + panel.src}
              alt={panel.description}
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
          aria-label="Next panel"
        >
          &gt;
        </button>
      </div>

      {filteredPanels[currentIndex].chapter && (
        <div className={styles.chapter}>Chapter {filteredPanels[currentIndex].chapter}</div>
      )}

      <p className={styles.description}>{filteredPanels[currentIndex].description}</p>

      <div className={styles.indicator}>
        {currentIndex + 1} / {filteredPanels.length}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            &times;
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={basePath + filteredPanels[currentIndex].src}
              alt={filteredPanels[currentIndex].description}
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
