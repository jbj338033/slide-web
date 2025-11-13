import { ReadingText } from '../components/ReadingText';

interface Slide9Props {
  progress?: number;
}

export const Slide9 = ({ progress = 0 }: Slide9Props) => (
  <div className="max-w-5xl">
    <h1 className="text-7xl font-bold mb-12">감사합니다</h1>
    <ReadingText lines={['AI의 미래를', '함께 만들어가요']} progress={progress} />
  </div>
);
