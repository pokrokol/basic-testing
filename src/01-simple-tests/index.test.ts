import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  it('adds two numbers', () => {
    const input = { a: 10, b: 5, action: Action.Add };
    expect(simpleCalculator(input)).toBe(15);
  });

  it('subtracts two numbers', () => {
    const input = { a: 20, b: 5, action: Action.Subtract };
    expect(simpleCalculator(input)).toBe(15);
  });

  it('multiplies two numbers', () => {
    const input = { a: 7, b: 6, action: Action.Multiply };
    expect(simpleCalculator(input)).toBe(42);
  });

  it('divides two numbers', () => {
    const input = { a: 18, b: 3, action: Action.Divide };
    expect(simpleCalculator(input)).toBe(6);
  });

  it('exponentiates two numbers', () => {
    const input = { a: 3, b: 3, action: Action.Exponentiate };
    expect(simpleCalculator(input)).toBe(27);
  });

  it('returns null for invalid input', () => {
    const input = { a: 'NaN', b: 4, action: Action.Add };
    expect(simpleCalculator(input)).toBeNull();
  });
});
