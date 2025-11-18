import { ReadingText } from '../components/ReadingText';

interface Slide2Props {
  progress: number;
}

export const Slide2 = ({ progress }: Slide2Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['긴 강의 영상은 지루하고', '핵심을 찾기 어렵습니다']}
    </ReadingText>
  </div>
);
