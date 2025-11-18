import { ReadingText } from '../components/ReadingText';

interface Slide1Props {
  progress: number;
}

export const Slide1 = ({ progress }: Slide1Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['온라인 강의 수강률', '평균 15%에 불과합니다']}
    </ReadingText>
  </div>
);
