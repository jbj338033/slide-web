import { ReadingText } from '../components/ReadingText';

interface Slide8Props {
  progress: number;
  lines: string[];
}

export const Slide8 = ({ progress, lines }: Slide8Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
