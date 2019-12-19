import { fuelRequiredByMass, totalFuelRequiredByMass } from '../part-1/main';
import { fuelRequiredByFuel, totalFuelRequiredByFuel } from '../part-2/main';
import { moduleMasses } from '../data/module-masses';

describe('Test the first part of the puzzle', () => {
  test('Negative module mass should require 0 fuel', () => {
    const fuel = fuelRequiredByMass(-12);
    expect(fuel).toBe(0);
  });

  test('Module mass of 0 should require 0 fuel', () => {
    const fuel = fuelRequiredByMass(0);
    expect(fuel).toBe(0);
  });

  test('Module mass of 12 should require 2 fuel', () => {
    const fuel = fuelRequiredByMass(12);
    expect(fuel).toBe(2);
  });

  test('Module mass of 14 should require 2 fuel', () => {
    const fuel = fuelRequiredByMass(14);
    expect(fuel).toBe(2);
  });

  test('Module mass of 1969 should require 664 fuel', () => {
    const fuel = fuelRequiredByMass(1969);
    expect(fuel).toBe(654);
  });

  test('Module mass of 100756 should require 33583 fuel', () => {
    const fuel = fuelRequiredByMass(100756);
    expect(fuel).toBe(33583);
  });

  test('Total fuel required should be 3239503', () => {
    const fuel = totalFuelRequiredByMass(moduleMasses);
    expect(fuel).toBe(3239503);
  });
});

describe('Test the second part of the puzzle', () => {
  test('Negative module mass should require 0 fuel in total', () => {
    const fuel = fuelRequiredByFuel(-14);
    expect(fuel).toBe(0);
  });

  test('Module mass of 0 should require 0 fuel in total', () => {
    const fuel = fuelRequiredByFuel(0);
    expect(fuel).toBe(0);
  });

  test('Module mass of 14 should require 2 fuel in total', () => {
    const fuel = fuelRequiredByFuel(14);
    expect(fuel).toBe(2);
  });

  test('Module mass of 1969 should require 966 fuel in total', () => {
    const fuel = fuelRequiredByFuel(1969);
    expect(fuel).toBe(966);
  });

  test('Module mass of 100756 should require 50346 fuel in total', () => {
    const fuel = fuelRequiredByFuel(100756);
    expect(fuel).toBe(50346);
  });

  test('Total fuel required by fuel should be 4856390', () => {
    const fuel = totalFuelRequiredByFuel(moduleMasses);
    expect(fuel).toBe(4856390);
  });
});
