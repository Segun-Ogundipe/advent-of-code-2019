import { manhattanDistance } from '../main';
import { firstWire, secondWire } from '../data/puzzle-input';

describe('Test the first part of the puzzle', () => {
  test('Crossed wires [R8,U5,L5,D3], [U7,R6,D4,L4] should return a distance of 6', () => {
    const distance = manhattanDistance(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']);
    expect(distance).toBe(6);
  });

  test('Crossed wires [R75,D30,R83,U83,L12,D49,R71,U7,L72], [U62,R66,U55,R34,D71,R55,D58,R83] should return a distance of 159', () => {
    const distance = manhattanDistance(
      ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
      ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']
    );
    expect(distance).toBe(159);
  });

  test('Crossed wires [R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51], [U98,R91,D20,R16,D67,R40,U7,R15,U6,R7] should return a distance of 135', () => {
    const distance = manhattanDistance(
      ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
      ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7']
    );
    expect(distance).toBe(135);
  });
});
