import { ReadingText } from '../components/ReadingText';

interface Slide3Props {
  progress?: number;
}

export const Slide3 = ({ progress = 0 }: Slide3Props) => (
  <div className="max-w-5xl">
    <h1 className="text-6xl font-bold mb-12">머신러닝의 발전</h1>
    <ReadingText lines={['데이터를 통해 스스로 학습하고', '패턴을 찾아내는 기술의 발전']} progress={progress} />
  </div>
);
