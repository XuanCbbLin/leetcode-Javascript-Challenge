import { describe, it, expect } from "vitest";
import map from "./index";

describe("input array and fn，return new array", () => {
  it("input arr = [1,2,3], fn = function plusone(n) { return n + 1; }， output [2,3,4]", () => {
    // arrange
    const arr = [1, 2, 3];
    const plusone = (n: number) => n + 1;

    // act
    const result = map(arr, plusone);

    // assert
    expect(result).toStrictEqual([2, 3, 4]);
  });

  it("input arr = [1,2,3], fn = function plusI(n, i) { return n + i; }， output [1,3,5]", () => {
    // arrange
    const arr = [1, 2, 3];
    const plusI = (n: number, i: number) => n + i;

    // act
    const result = map(arr, plusI);

    // assert
    expect(result).toStrictEqual([1, 3, 5]);
  });

  it("input arr = [10,20,30], fn = function constant() { return 42; }， output [42,42,42]", () => {
    // arrange
    const arr = [10, 20, 30];
    const constant = () => 42;

    // act
    const result = map(arr, constant);

    // assert
    expect(result).toStrictEqual([42, 42, 42]);
  });
});
