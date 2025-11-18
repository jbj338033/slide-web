import { ReadingText } from '../components/ReadingText';

interface Slide6Props {
  progress: number;
  lines: string[];
}

export const Slide6 = ({ progress, lines }: Slide6Props) => (
  <div className="max-w-5xl">
    <ReadingText lines={lines} progress={progress} />
  </div>
);
