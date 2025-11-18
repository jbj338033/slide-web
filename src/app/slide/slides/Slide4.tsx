import { ReadingText } from '../components/ReadingText';

interface Slide4Props {
  progress: number;
}

export const Slide4 = ({ progress }: Slide4Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['AI가 1시간 강의를', '5분 인터랙티브 슬라이드로']}
    </ReadingText>
  </div>
);
