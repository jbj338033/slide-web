import { ReadingText } from '../components/ReadingText';

interface Slide9Props {
  progress: number;
}

export const Slide9 = ({ progress }: Slide9Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['QuickLearn', '5분이면 충분합니다']}
    </ReadingText>
  </div>
);
