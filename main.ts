import { firstWire, secondWire } from './data/puzzle-input';
import { WireGrid } from './util/WireGrid';

function manhattanDistance(firstWire: String[], secondWire: String[]): number[] {
  const firstWirePath: WireGrid = new WireGrid(firstWire);
  const secondWirePath: WireGrid = new WireGrid(secondWire);
  let shortestDistance: number = Number.MAX_SAFE_INTEGER;
  let shortestSteps: number = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < firstWirePath.x.length; i++) {
    for (let j = 1; j < secondWirePath.x.length; j++) {
      if (firstWirePath.x[i] == secondWirePath.x[j]) {
        if (firstWirePath.y[i] == secondWirePath.y[j]) {
          const distance: number = Math.abs(firstWirePath.x[i]) + Math.abs(firstWirePath.y[i]);
          const steps: number = i + j;
          if (shortestDistance > distance) {
            shortestDistance = distance;
          }
          if (shortestSteps > steps) {
            shortestSteps = steps;
          }
        }
      }
    }
  }

  return [shortestDistance, shortestSteps];
}

function stepsToIntersection(firstWire: String[], secondWire: String[]): number {
  return 0;
}
// console.log('short: ', manhattanDistance(firstWire, secondWire));

export { manhattanDistance, stepsToIntersection };
