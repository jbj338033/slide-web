import { ReadingText } from '../components/ReadingText';

interface Slide5Props {
  progress: number;
  lines: string[];
}

export const Slide5 = ({ progress, lines }: Slide5Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
