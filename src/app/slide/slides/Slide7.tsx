import { ReadingText } from '../components/ReadingText';

interface Slide7Props {
  progress: number;
  lines: string[];
}

export const Slide7 = ({ progress, lines }: Slide7Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
