'use client';

import { useState, useEffect, useRef } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Controls } from './components/Controls';
import { TopControls } from './components/TopControls';
import { slides, totalSlides, slideDurations } from './slides';

export default function SlidePage() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPrevAnimating, setIsPrevAnimating] = useState(false);
  const [isNextAnimating, setIsNextAnimating] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const CurrentSlide = slides[current];

  useEffect(() => {
    if (isPlaying) {
      const currentDuration = slideDurations[current];
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (current < totalSlides - 1) {
              setCurrent(current + 1);
              return 0;
            }
            setIsPlaying(false);
            return 100;
          }
          return prev + (100 / (currentDuration / 100));
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [current, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    if (current > 0) {
      setIsPrevAnimating(true);
      setTimeout(() => setIsPrevAnimating(false), 200);
      setCurrent(current - 1);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (current < totalSlides - 1) {
      setIsNextAnimating(true);
      setTimeout(() => setIsNextAnimating(false), 200);
      setCurrent(current + 1);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Slide Presentation',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (err) {}
  };

  const handleExit = () => {
    window.history.back();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      }
      if (e.key === 'ArrowRight') {
        handleNext();
      }
      if (e.key === ' ') {
        e.preventDefault();
        handlePlayPause();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current, isPlaying]);

  return (
    <div className="w-screen h-screen bg-white relative">
      <TopControls isMuted={isMuted} onToggleMute={handleToggleMute} onShare={handleShare} onExit={handleExit} />
      <ProgressBar current={current} progress={progress} totalSlides={totalSlides} />

      <div className="w-full h-full flex items-center justify-center pt-6">
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
