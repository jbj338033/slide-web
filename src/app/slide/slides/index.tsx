import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { Slide3 } from './Slide3';
import { Slide4 } from './Slide4';
import { Slide5 } from './Slide5';
import { Slide6 } from './Slide6';
import { Slide7 } from './Slide7';
import { Slide8 } from './Slide8';
import { Slide9 } from './Slide9';

export interface SlideConfig {
  component: React.ComponentType<{ progress: number; lines: string[] }>;
  lines: string[];
}

const CHARS_PER_SECOND = 8; // 초당 읽는 글자 수 (느리게)

export const calculateDuration = (lines: string[]): number => {
  const totalChars = lines.join('').length;
  const readingTime = (totalChars / CHARS_PER_SECOND) * 1000;
  // 텍스트 읽기 + 여유 시간
  return readingTime + 1500; // 1.5초 여유
};

export const slideConfigs: SlideConfig[] = [
  { component: Slide1, lines: ['온라인 강의 수강률', '평균 15%에 불과합니다'] },
  { component: Slide2, lines: ['긴 강의 영상은 지루하고', '핵심을 찾기 어렵습니다'] },
  { component: Slide3, lines: ['그래서 우리는 만들었습니다', 'QuickLearn'] },
  { component: Slide4, lines: ['AI가 1시간 강의를', '5분 인터랙티브 슬라이드로'] },
  { component: Slide5, lines: ['핵심만 추출하고', '스토리텔링으로 재구성'] },
  { component: Slide6, lines: ['GPT-4와 Whisper API로', '자동 요약 및 스크립트 생성'] },
  { component: Slide7, lines: ['테스트 결과', '학습 완료율 73% 달성'] },
  { component: Slide8, lines: ['누구나 쉽게 배우는', '교육의 민주화를 실현합니다'] },
  { component: Slide9, lines: ['QuickLearn', '5분이면 충분합니다'] },
];

export const totalSlides = slideConfigs.length;
