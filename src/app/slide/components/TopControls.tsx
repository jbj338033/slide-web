import { Volume2, VolumeX, Share2, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface TopControlsProps {
  isMuted: boolean;
  onToggleMute: () => void;
  onShare: () => void;
  onExit: () => void;
}

export const TopControls = ({ isMuted, onToggleMute, onShare, onExit }: TopControlsProps) => {
  const [isShareHovered, setIsShareHovered] = useState(false);
  const [isExitHovered, setIsExitHovered] = useState(false);

  return (
    <>
      <div className="absolute top-11 left-16">
        <button
          onClick={onExit}
          onMouseEnter={() => setIsExitHovered(true)}
          onMouseLeave={() => setIsExitHovered(false)}
          style={{
            backgroundColor: 'rgba(13, 16, 42, 0.04)',
            color: 'rgba(13, 16, 42, 0.4)',
            width: isExitHovered ? '120px' : '60px',
            transition: 'all 200ms',
          }}
          className={`h-[60px] rounded-full flex items-center outline-none cursor-pointer overflow-hidden group hover:bg-blue-50 ${isExitHovered ? 'justify-start pl-[18px] pr-[18px]' : 'justify-center'}`}
        >
          <ChevronLeft className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-200 flex-shrink-0" strokeWidth={2} />
          {isExitHovered && (
            <span className="text-base group-hover:text-blue-400 transition-all duration-200 whitespace-nowrap ml-2">
              나가기
            </span>
          )}
        </button>
      </div>

      <div className="absolute top-11 right-16 flex items-center gap-3">
      <button
        onClick={onToggleMute}
        style={{
          backgroundColor: 'rgba(13, 16, 42, 0.04)',
          color: 'rgba(13, 16, 42, 0.4)',
          transition: 'all 200ms',
        }}
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center outline-none cursor-pointer group hover:bg-blue-50"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-200" strokeWidth={2} />
        ) : (
          <Volume2 className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-200" strokeWidth={2} />
        )}
      </button>

      <button
        onClick={onShare}
        onMouseEnter={() => setIsShareHovered(true)}
        onMouseLeave={() => setIsShareHovered(false)}
        style={{
          backgroundColor: 'rgba(13, 16, 42, 0.04)',
          color: 'rgba(13, 16, 42, 0.4)',
          width: isShareHovered ? '140px' : '60px',
          transition: 'all 200ms',
        }}
        className="h-[60px] rounded-full flex items-center justify-center outline-none cursor-pointer overflow-hidden group hover:bg-blue-50"
      >
        <Share2 className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-200 flex-shrink-0" strokeWidth={2} />
        {isShareHovered && (
          <span className="text-base group-hover:text-blue-400 transition-all duration-200 whitespace-nowrap ml-2">
            공유하기
          </span>
        )}
      </button>
      </div>
    </>
  );
};
