import { ReadingText } from '../components/ReadingText';

interface Slide3Props {
  progress: number;
}

export const Slide3 = ({ progress }: Slide3Props) => (
  <div className="max-w-5xl">
    <ReadingText progress={progress}>
      {['그래서 우리는 만들었습니다', 'QuickLearn']}
    </ReadingText>
  </div>
);
