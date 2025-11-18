import { ReadingText } from '../components/ReadingText';

interface Slide2Props {
  progress: number;
  lines: string[];
}

export const Slide2 = ({ progress, lines }: Slide2Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
