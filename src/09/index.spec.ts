import { it, describe, expect } from "vitest";
import memoize from "./index";

describe("Given a function fn, return a memoized version of that function.", () => {
  it("input sum fn accepts two integers a and b and returns a + b", () => {
    // arrange
    const sum = (a: number, b: number) => {
      return a + b;
    };

    //act
    const memoizedSum = memoize(sum);

    //assert
    expect(memoizedSum(2, 2)).toBe(4);
    expect(memoizedSum(2, 2)).toBe(4);

    expect(memoizedSum(1, 2)).toBe(3);
  });
  it("input fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.", () => {
    //arrange
    const fib = (n: number): number => {
      return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
    };

    //act
    const memoFib = memoize(fib);

    //assert
    expect(memoFib(5)).toBe(8);
    // expect(callCount).toBe(1);
  });
  it("input factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.", () => {
    //arrange
    const factorial = (n: number): number => {
      return n <= 1 ? 1 : n * factorial(n - 1);
    };

    //act
    const memoFactorial = memoize(factorial);

    //assert
    expect(memoFactorial(2)).toBe(2);
    expect(memoFactorial(3)).toBe(6);
    expect(memoFactorial(2)).toBe(2);
    expect(memoFactorial(3)).toBe(6);
  });
});
