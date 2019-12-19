const fuelRequiredByMass = (mass: number): number => {
  if (mass <= 0) return 0;
  const fuelRequired: number = Math.floor(mass / 3) - 2;
  return fuelRequired;
};

const totalFuelRequiredByMass = (masses: number[]): number => {
  return masses.reduce((acc, current) => acc + fuelRequiredByMass(current), 0);
};

export { fuelRequiredByMass, totalFuelRequiredByMass };
