import { describe, it, expect } from "vitest";
import compose from "./index";

describe("input an array of functions [f1, f2, f3, ..., fn], output one integer", () => {
  it("input [x => x + 1, x => x * x, x => 2 * x]  x = 4  ,output 65 ", () => {
    // arrange
    const functions = [(x: number) => x + 1, (x: number) => x * x, (x: number) => 2 * x];
    const x = 4;

    // act
    const fn = compose(functions);
    const result = fn(x);

    // assert
    expect(result).toBe(65);
  });

  it("input [x => 10 * x, x => 10 * x, x => 10 * x] x = 1 ,output 1000 ", () => {
    // arrange
    const functions = [(x: number) => 10 * x, (x: number) => 10 * x, (x: number) => 10 * x];
    const x = 1;

    // act
    const fn = compose(functions);
    const result = fn(x);

    // assert
    expect(result).toBe(1000);
  });

  it("input [] x=42 ,output 42 ", () => {
    // arrange
    const functions: [] = [];
    const x = 42;

    // act
    const fn = compose(functions);
    const result = fn(x);

    // assert
    expect(result).toBe(42);
  });
});
