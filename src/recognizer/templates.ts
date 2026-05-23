import type { RecognizerTemplate, Point } from '../types';
import { normalize } from './algorithm';

function pts(...coords: number[]): Point[] {
  const result: Point[] = [];
  for (let i = 0; i < coords.length; i += 2) {
    result.push({ x: coords[i], y: coords[i + 1] });
  }
  return result;
}

function makeTemplate(digit: number, points: Point[]): RecognizerTemplate {
  return { digit, points: normalize(points) };
}

const ZERO_1 = pts(
  150,30, 185,35, 215,55, 230,85, 228,120, 215,150,
  195,170, 165,180, 135,180, 105,170, 82,150, 68,120,
  65,85, 78,55, 105,35, 135,30, 150,30
);

const ONE_1 = pts(
  130,40, 150,30, 150,60, 150,90, 150,120, 150,150, 150,180
);
const ONE_2 = pts(
  150,30, 150,70, 150,110, 150,150, 150,180
);

const TWO_1 = pts(
  100,60, 115,40, 140,30, 165,30, 185,45, 190,65,
  180,85, 160,105, 135,125, 110,150, 95,170, 90,180, 195,180
);

const THREE_1 = pts(
  100,50, 120,35, 145,30, 170,35, 185,55, 180,75,
  165,90, 150,95, 165,100, 185,115, 188,138, 175,160,
  155,175, 130,180, 105,175, 92,165
);

const FOUR_1 = pts(
  160,30, 130,80, 100,130, 90,145,
  200,145, 160,145,
  160,145, 160,180
);
const FOUR_2 = pts(
  170,30, 170,60, 170,90, 170,120, 170,150, 170,180,
  170,90, 80,90, 140,30, 130,60, 120,90
);

const FIVE_1 = pts(
  190,40, 150,40, 110,40, 100,40,
  100,90, 115,75, 140,70, 165,75,
  185,95, 188,120, 175,150, 150,170, 120,175, 95,165, 85,150
);

const SIX_1 = pts(
  175,40, 150,30, 120,35, 95,55, 78,85, 72,120,
  75,150, 90,170, 115,180, 145,180, 170,168, 185,148,
  188,122, 175,100, 152,88, 125,88, 100,100, 85,120, 85,145
);

const SEVEN_1 = pts(
  90,40, 130,40, 170,40, 200,40,
  195,45, 170,80, 145,120, 120,155, 105,180
);

const EIGHT_1 = pts(
  150,30, 175,40, 190,60, 185,82, 165,95, 145,100,
  125,108, 105,125, 100,148, 115,170, 140,180, 165,178,
  185,162, 190,140, 178,118, 158,105, 138,98, 115,88,
  100,70, 105,48, 125,35, 150,30
);

const NINE_1 = pts(
  150,40, 180,50, 198,75, 195,105, 178,125, 152,133,
  122,128, 102,108, 100,80, 115,55, 140,40, 160,40,
  185,48, 198,75, 198,110, 192,145, 175,170, 155,185, 130,188
);

export const DIGIT_TEMPLATES: RecognizerTemplate[] = [
  makeTemplate(0, ZERO_1),
  makeTemplate(1, ONE_1),
  makeTemplate(1, ONE_2),
  makeTemplate(2, TWO_1),
  makeTemplate(3, THREE_1),
  makeTemplate(4, FOUR_1),
  makeTemplate(4, FOUR_2),
  makeTemplate(5, FIVE_1),
  makeTemplate(6, SIX_1),
  makeTemplate(7, SEVEN_1),
  makeTemplate(8, EIGHT_1),
  makeTemplate(9, NINE_1),
];