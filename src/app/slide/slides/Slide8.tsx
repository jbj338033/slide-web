import { ReadingText } from '../components/ReadingText';

interface Slide8Props {
  progress?: number;
}

export const Slide8 = ({ progress = 0 }: Slide8Props) => (
  <div className="max-w-5xl">
    <h1 className="text-6xl font-bold mb-12">미래의 가능성</h1>
    <ReadingText lines={['AI와 인간의 협업으로', '더 나은 미래를 만들어갑니다']} progress={progress} />
  </div>
);
