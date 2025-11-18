import { ReadingText } from '../components/ReadingText';

interface Slide1Props {
  progress: number;
  lines: string[];
}

export const Slide1 = ({ progress, lines }: Slide1Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
