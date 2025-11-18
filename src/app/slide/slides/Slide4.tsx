import { ReadingText } from '../components/ReadingText';

interface Slide4Props {
  progress: number;
  lines: string[];
}

export const Slide4 = ({ progress, lines }: Slide4Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
