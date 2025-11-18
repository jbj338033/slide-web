import { ReadingText } from '../components/ReadingText';

interface Slide3Props {
  progress: number;
  lines: string[];
}

export const Slide3 = ({ progress, lines }: Slide3Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
