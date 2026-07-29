'use client';

import { useState, useEffect, useMemo, useCallback, useSyncExternalStore } from 'react';
import Image from 'next/image';
import styles from './PanelCarousel.module.css';

interface Panel {
  src: string;
  description: string;
  chapter?: number | string;
}

interface PanelCarouselProps {
  title: string;
  slug: string;
  basePath: string;
  panels: Panel[];
  showSpoilerControls?: boolean;
}

interface SpoilerSettings {
  enabled: boolean;
  max: number | null;
}

const DEFAULT_SETTINGS: SpoilerSettings = { enabled: false, max: null };

// storage events only fire in other tabs, so same-tab writes dispatch this
const SETTINGS_CHANGE_EVENT = 'alissasite-spoiler-settings-change';

function parseSettings(raw: string | null): SpoilerSettings {
  if (!raw) return DEFAULT_SETTINGS;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return DEFAULT_SETTINGS;
    const record = parsed as Record<string, unknown>;
    return {
      enabled: typeof record.enabled === 'boolean' ? record.enabled : false,
      max: typeof record.max === 'number' ? record.max : null,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

// localStorage-backed spoiler settings; useSyncExternalStore keeps the server
// render and client hydration consistent (server sees the defaults)
function useSpoilerSettings(storageKey: string): [SpoilerSettings, (next: SpoilerSettings) => void] {
  const subscribe = useCallback((onChange: () => void) => {
    window.addEventListener('storage', onChange);
    window.addEventListener(SETTINGS_CHANGE_EVENT, onChange);
    return () => {
      window.removeEventListener('storage', onChange);
      window.removeEventListener(SETTINGS_CHANGE_EVENT, onChange);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  }, [storageKey]);

  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const settings = useMemo(() => parseSettings(raw), [raw]);

  const save = useCallback(
    (next: SpoilerSettings) => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
      window.dispatchEvent(new Event(SETTINGS_CHANGE_EVENT));
    },
    [storageKey]
  );

  return [settings, save];
}

export default function PanelCarousel({ title, slug, basePath, panels, showSpoilerControls = true }: PanelCarouselProps) {
  const storageKey = `alissasite-${slug}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [settings, saveSettings] = useSpoilerSettings(storageKey);

  const spoilerEnabled = settings.enabled;
  const maxChapterInput = settings.max?.toString() ?? '';
  const maxChapter = settings.max ?? Infinity;

  const handleSpoilerToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveSettings({ ...settings, enabled: e.target.checked });
  };

  const handleMaxChapterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^0-9]/g, '');
    saveSettings({ ...settings, max: digits === '' ? null : parseInt(digits) });
  };

  // Filter panels based on spoiler settings
  const filteredPanels = useMemo(() => {
    if (!spoilerEnabled) return panels;
    return panels.filter(panel => {
      const ch = typeof panel.chapter === 'string' ? parseInt(panel.chapter) : panel.chapter;
      return ch <= maxChapter;
    });
  }, [panels, spoilerEnabled, maxChapter]);

  // Clamp in case filtering shrank the list below the stored index
  const safeIndex = Math.max(0, Math.min(currentIndex, filteredPanels.length - 1));

  const goToPrevious = () => {
    setCurrentIndex(safeIndex === 0 ? filteredPanels.length - 1 : safeIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(safeIndex === filteredPanels.length - 1 ? 0 : safeIndex + 1);
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
        {showSpoilerControls && (
          <div className={styles.spoilerControls}>
            <label className={styles.spoilerLabel}>
              <input
                type="checkbox"
                checked={spoilerEnabled}
                onChange={handleSpoilerToggle}
              />
              Hide panels past chapter
            </label>
            {spoilerEnabled && (
              <input
                type="text"
                inputMode="numeric"
                className={styles.chapterInput}
                value={maxChapterInput}
                onChange={handleMaxChapterChange}
                placeholder=""
              />
            )}
          </div>
        )}
        <p className={styles.noSpoilers}>All panels hidden (past chapter {maxChapterInput || '?'})</p>
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      <h3 className={styles.title}>{title}</h3>

      {showSpoilerControls && (
        <div className={styles.spoilerControls}>
          <label className={styles.spoilerLabel}>
            <input
              type="checkbox"
              checked={spoilerEnabled}
              onChange={handleSpoilerToggle}
            />
            Hide panels past chapter
          </label>
          {spoilerEnabled && (
            <input
              type="text"
              inputMode="numeric"
              className={styles.chapterInput}
              value={maxChapterInput}
              onChange={handleMaxChapterChange}
              placeholder="all"
            />
          )}
        </div>
      )}

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
                opacity: index === safeIndex ? 1 : 0,
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

      {filteredPanels[safeIndex].chapter && (
        <div className={styles.chapter}>Chapter {filteredPanels[safeIndex].chapter}</div>
      )}

      <p className={styles.description}>{filteredPanels[safeIndex].description}</p>

      <div className={styles.indicator}>
        {safeIndex + 1} / {filteredPanels.length}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            &times;
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={basePath + filteredPanels[safeIndex].src}
              alt={filteredPanels[safeIndex].description}
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
