import { ReadingText } from '../components/ReadingText';

interface Slide5Props {
  progress?: number;
}

export const Slide5 = ({ progress = 0 }: Slide5Props) => (
  <div className="max-w-5xl">
    <h1 className="text-6xl font-bold mb-12">생성형 AI의 등장</h1>
    <ReadingText lines={['텍스트, 이미지, 영상을 생성하는', '창작의 영역으로 확장되는 AI']} progress={progress} />
  </div>
);
