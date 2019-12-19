const fuelRequiredByFuel = (mass: number, sum: number = 0): number => {
  if (mass <= 0) return 0;
  let requiredFuel: number = Math.floor(mass / 3) - 2;
  if (requiredFuel <= 0) {
    return sum;
  }
  return fuelRequiredByFuel(requiredFuel, sum + requiredFuel);
};

const totalFuelRequiredByFuel = (masses: number[]): number => {
  return masses.reduce((acc, current) => acc + fuelRequiredByFuel(current), 0);
};

export { fuelRequiredByFuel, totalFuelRequiredByFuel };
