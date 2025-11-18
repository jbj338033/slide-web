import { ReadingText } from '../components/ReadingText';

interface Slide9Props {
  progress: number;
  lines: string[];
}

export const Slide9 = ({ progress, lines }: Slide9Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
