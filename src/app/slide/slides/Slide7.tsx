import { ReadingText } from '../components/ReadingText';

interface Slide7Props {
  progress?: number;
}

export const Slide7 = ({ progress = 0 }: Slide7Props) => (
  <div className="max-w-5xl">
    <h1 className="text-6xl font-bold mb-12">윤리와 책임</h1>
    <ReadingText lines={['AI 기술의 발전과 함께', '윤리적 사용과 사회적 책임']} progress={progress} />
  </div>
);
