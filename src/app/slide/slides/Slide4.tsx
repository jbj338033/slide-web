import { ReadingText } from '../components/ReadingText';

interface Slide4Props {
  progress?: number;
}

export const Slide4 = ({ progress = 0 }: Slide4Props) => (
  <div className="max-w-5xl">
    <h1 className="text-6xl font-bold mb-12">딥러닝의 시대</h1>
    <ReadingText lines={['신경망을 활용한 딥러닝이', '이미지 인식과 자연어 처리를 혁신']} progress={progress} />
  </div>
);
