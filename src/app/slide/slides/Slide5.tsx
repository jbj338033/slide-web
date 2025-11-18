import { ReadingText } from '../components/ReadingText';

interface Slide5Props {
  progress: number;
}

export const Slide5 = ({ progress }: Slide5Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['핵심만 추출하고', '스토리텔링으로 재구성']}
    </ReadingText>
  </div>
);
