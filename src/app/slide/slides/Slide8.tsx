import { ReadingText } from '../components/ReadingText';

interface Slide8Props {
  progress: number;
}

export const Slide8 = ({ progress }: Slide8Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['누구나 쉽게 배우는', '교육의 민주화를 실현합니다']}
    </ReadingText>
  </div>
);
