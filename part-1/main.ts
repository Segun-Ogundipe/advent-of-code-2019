/**
 * Returns the fuel required by a module.
 *
 * @param mass - A numeric mass
 */
function fuelRequiredByMass(mass: number): number {
  if (mass <= 0) return 0;
  const fuelRequired: number = Math.floor(mass / 3) - 2;
  return fuelRequired;
}

/**
 * Returns the total fuel required by the modules in an array of modules.
 *
 * @param masses - An array of module masses
 */
function totalFuelRequiredByMass(masses: number[]): number {
  return masses.reduce((acc, current) => acc + fuelRequiredByMass(current), 0);
}

export { fuelRequiredByMass, totalFuelRequiredByMass };
