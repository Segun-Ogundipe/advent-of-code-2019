import { gravityAssist1, gravityAssist2 } from '../main';
import { puzzleInput } from '../data/puzzle-input';

describe('Test the first part of the puzzle', () => {
  test('Intcode 1,9,10,3,2,3,11,0,99,30,40,50 should return 3500', () => {
    const gAssist = gravityAssist1([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]);
    expect(gAssist).toBe(3500);
  });

  test('Intcode 1,0,0,0,99 should return 2', () => {
    const gAssist = gravityAssist1([1, 0, 0, 0, 99]);
    expect(gAssist).toBe(2);
  });

  test('Intcode 2,3,0,3,99 should return 2', () => {
    const gAssist = gravityAssist1([2, 3, 0, 3, 99]);
    expect(gAssist).toStrictEqual(2);
  });

  test('Intcode 2,4,4,5,99,0 should return 2', () => {
    const gAssist = gravityAssist1([2, 4, 4, 5, 99, 0]);
    expect(gAssist).toBe(2);
  });

  test('Intcode 1,1,1,4,99,5,6,0,99 should return 30', () => {
    const gAssist = gravityAssist1([1, 1, 1, 4, 99, 5, 6, 0, 99]);
    expect(gAssist).toBe(30);
  });
});

describe('Test the second part of the puzzle', () => {
  test('Should return 7749', () => {
    const fuel = gravityAssist2(puzzleInput);
    expect(fuel).toBe(7749);
  });
});
