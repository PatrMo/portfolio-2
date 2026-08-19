'use client';

import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

const MIN_DURATION_MS = 700;
const FADE_DURATION_MS = 600;

export default function LoadingScreen() {
  const { progress, active } = useProgress();
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Three.js reports active=false before any loader has started, so track
  // whether at least one asset has actually been registered.
  const [loaderStarted, setLoaderStarted] = useState(false);

  useEffect(() => {
    if (active) setLoaderStarted(true);
  }, [active]);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setWindowLoaded(true);
      return;
    }
    const onLoad = () => setWindowLoaded(true);
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMinTimePassed(true), MIN_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  // Safety net: never trap the user behind the overlay if a loader stalls.
  useEffect(() => {
    const t = setTimeout(() => setTimedOut(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const assetsReady = loaderStarted ? !active && progress >= 100 : windowLoaded;
  const ready = timedOut || (assetsReady && windowLoaded && minTimePassed);

  useEffect(() => {
    if (!ready || fadingOut) return;
    setFadingOut(true);
    const t = setTimeout(() => setHidden(true), FADE_DURATION_MS);
    return () => clearTimeout(t);
  }, [ready, fadingOut]);

  if (hidden) return null;

  const shown = Math.min(100, Math.round(progress));

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex touch-none flex-col items-center justify-center overscroll-contain bg-background transition-opacity duration-[600ms] ease-out ${
        fadingOut ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-500/10" />

      <div className="relative flex flex-col items-center gap-6 px-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-foreground/15" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-foreground/80" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium tracking-[0.2em] text-foreground/70 uppercase">
            Loading
          </p>

          <div className="h-1 w-56 overflow-hidden rounded-full bg-foreground/10">
            <div
              className="h-full rounded-full bg-foreground/80 transition-[width] duration-300 ease-out"
              style={{ width: `${loaderStarted ? shown : 0}%` }}
            />
          </div>

          <p className="text-xs tabular-nums text-foreground/50">
            {loaderStarted ? `${shown}%` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}
