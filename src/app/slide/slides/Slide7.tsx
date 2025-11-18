import { ReadingText } from '../components/ReadingText';

interface Slide7Props {
  progress: number;
}

export const Slide7 = ({ progress }: Slide7Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['테스트 결과', '학습 완료율 73% 달성']}
    </ReadingText>
  </div>
);
