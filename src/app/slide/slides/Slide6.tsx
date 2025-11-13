import { ReadingText } from '../components/ReadingText';

interface Slide6Props {
  progress?: number;
}

export const Slide6 = ({ progress = 0 }: Slide6Props) => (
  <div className="max-w-5xl">
    <h1 className="text-6xl font-bold mb-12">산업의 변화</h1>
    <ReadingText lines={['의료, 금융, 제조업 등', '모든 산업 분야의 혁신']} progress={progress} />
  </div>
);
