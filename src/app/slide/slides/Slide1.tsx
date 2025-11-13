import { ReadingText } from '../components/ReadingText';

interface Slide1Props {
  progress: number;
}

export const Slide1 = ({ progress }: Slide1Props) => (
  <div className="max-w-5xl">
    <h1 className="text-7xl font-bold mb-12">AI의 미래</h1>
    <ReadingText lines={['인공지능이 만들어갈', '새로운 세상']} progress={progress} />
  </div>
);
