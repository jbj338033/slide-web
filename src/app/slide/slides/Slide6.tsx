import { ReadingText } from '../components/ReadingText';

interface Slide6Props {
  progress: number;
}

export const Slide6 = ({ progress }: Slide6Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['GPT-4와 Whisper API로', '자동 요약 및 스크립트 생성']}
    </ReadingText>
  </div>
);
