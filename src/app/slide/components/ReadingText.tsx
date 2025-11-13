interface ReadingTextProps {
  lines: string[];
  progress: number;
}

export const ReadingText = ({ lines, progress }: ReadingTextProps) => {
  const getLineProgress = (index: number) => {
    const linesCount = lines.length;
    const progressPerLine = 100 / linesCount;
    const lineStart = index * progressPerLine;
    const lineEnd = (index + 1) * progressPerLine;

    if (progress <= lineStart) return 0;
    if (progress >= lineEnd) return 100;
    return ((progress - lineStart) / progressPerLine) * 100;
  };

  return (
    <div className="flex flex-col gap-4 items-start">
      {lines.map((text, index) => {
        const lineProgress = getLineProgress(index);
        const isComplete = lineProgress === 100;

        return (
          <div key={index} className="relative">
            <div className="text-gray-400 text-4xl font-bold whitespace-nowrap">
              {text}
            </div>
            <div
              className="absolute inset-0 overflow-hidden will-change-auto"
              style={{ width: `${lineProgress}%` }}
            >
              <div
                className="text-4xl font-bold whitespace-nowrap text-transparent"
                style={{
                  backgroundImage: isComplete
                    ? 'linear-gradient(to right, #000, #000)'
                    : 'linear-gradient(to right, #000 0%, #000 70%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
