import { ReadingText } from '../components/ReadingText';

interface Slide2Props {
  progress?: number;
}

export const Slide2 = ({ progress = 0 }: Slide2Props) => (
  <div className="max-w-5xl">
    <h1 className="text-6xl font-bold mb-12">AI란 무엇인가</h1>
    <ReadingText lines={['인간의 학습능력과 추론능력을', '컴퓨터로 구현한 기술입니다']} progress={progress} />
  </div>
);
