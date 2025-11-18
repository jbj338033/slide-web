'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Controls } from './components/Controls';
import { TopControls } from './components/TopControls';
import { slides, totalSlides } from './slides';

const SLIDE_DURATION = 5000; // 각 슬라이드 5초

export default function SlidePage() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPrevAnimating, setIsPrevAnimating] = useState(false);
  const [isNextAnimating, setIsNextAnimating] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const startTimeRef = useRef<number>(Date.now());
  const rafIdRef = useRef<number | null>(null);

  const CurrentSlide = slides[current];

  useEffect(() => {
    if (!CurrentSlide) return;

    if (!isPlaying) {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      return;
    }

    const remainingProgress = 100 - progress;
    const remainingTime = (remainingProgress / 100) * SLIDE_DURATION;
    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min(progress + (elapsed / remainingTime) * remainingProgress, 100);

      if (newProgress >= 100) {
        setProgress(100);
        if (current < totalSlides - 1) {
          setCurrent((prev) => prev + 1);
          setProgress(0);
        } else {
          setIsPlaying(false);
        }
      } else {
        setProgress(newProgress);
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [current, isPlaying, CurrentSlide, progress]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prevCurrent) => {
      if (prevCurrent > 0) {
        setIsPrevAnimating(true);
        setTimeout(() => setIsPrevAnimating(false), 200);
        setProgress(0);
        setIsPlaying(true);
        return prevCurrent - 1;
      }
      return prevCurrent;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prevCurrent) => {
      if (prevCurrent < totalSlides - 1) {
        setIsNextAnimating(true);
        setTimeout(() => setIsNextAnimating(false), 200);
        setProgress(0);
        setIsPlaying(true);
        return prevCurrent + 1;
      }
      return prevCurrent;
    });
  }, []);

  const handleToggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const handleShare = useCallback(async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Slide Presentation',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (err) {
      // Silently fail
    }
  }, []);

  const handleExit = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        handlePlayPause();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handlePrev, handleNext, handlePlayPause]);

  if (!CurrentSlide) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-white overflow-hidden">
      <TopControls isMuted={isMuted} onToggleMute={handleToggleMute} onShare={handleShare} onExit={handleExit} />
      <ProgressBar current={current} progress={progress} totalSlides={totalSlides} />

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <CurrentSlide progress={progress} />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 100% at center bottom, rgba(147, 197, 253, 0.25) 0%, rgba(147, 197, 253, 0.1) 50%, transparent 80%)'
        }}
      />

      <Controls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onPrev={handlePrev}
        onNext={handleNext}
        canGoPrev={current > 0}
        canGoNext={current < totalSlides - 1}
        isPrevAnimating={isPrevAnimating}
        isNextAnimating={isNextAnimating}
      />
    </div>
  );
}
