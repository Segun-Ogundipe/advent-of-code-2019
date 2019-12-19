/**
 * Returns the fuel required by a module's fuel.
 *
 * @param mass - A numeric mass.
 * @param sum - Used to derive total fuel requirement.
 */
function fuelRequiredByFuel(mass: number, sum: number = 0): number {
  if (mass <= 0) return 0;
  let requiredFuel: number = Math.floor(mass / 3) - 2;
  if (requiredFuel <= 0) {
    return sum;
  }
  return fuelRequiredByFuel(requiredFuel, sum + requiredFuel);
}

/**
 * Returns the total fuel required by the fuel of the modules in an array of modules.
 *
 * @param masses - An array of module masses
 */
function totalFuelRequiredByFuel(masses: number[]): number {
  return masses.reduce((acc, current) => acc + fuelRequiredByFuel(current), 0);
}

export { fuelRequiredByFuel, totalFuelRequiredByFuel };
