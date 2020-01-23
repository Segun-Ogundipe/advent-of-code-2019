import { puzzleInput } from './data/puzzle-input';
/**
 * Returns an integer as the result of a gravity assist algorithm.
 *
 * @param intCode - An intcode array
 */
function gravityAssist1(intCode: number[]): number {
  let intCodeArray: number[] = intCode.slice();
  for (let i = 0, len = intCode.length; i < len; i++) {
    const opCode: number = intCodeArray[i];
    if (opCode == 1) {
      intCodeArray[intCodeArray[i + 3]] =
        intCodeArray[intCodeArray[i + 1]] + intCodeArray[intCodeArray[i + 2]];
      i += 3;
    } else if (opCode == 2) {
      intCodeArray[intCodeArray[i + 3]] =
        intCodeArray[intCodeArray[i + 1]] * intCodeArray[intCodeArray[i + 2]];
      i += 3;
    } else if (opCode == 99) {
      return intCodeArray[0];
    }
  }

  return -1;
}

/**
 * Returns the output gravity of a gravity assist algorithm.
 *
 */
function gravityAssist2(intCode: number[]): number {
  let output = 0;
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      let intCodeArray: number[] = intCode.slice();
      intCodeArray[1] = noun;
      intCodeArray[2] = verb;
      output = gravityAssist1(intCodeArray);
      if (output == 19690720) {
        return 100 * noun + verb;
      }
    }
  }

  return -1;
}
console.log(gravityAssist1(puzzleInput), gravityAssist2(puzzleInput));

export { gravityAssist1, gravityAssist2 };
