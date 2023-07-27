import { it, describe, expect } from "vitest";
import once from "./index";

describe("input a function, return a new function", () => {
  it("input fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]], return 6", () => {
    // arrange
    const fn = (a: number, b: number, c: number) => a + b + c;

    //act
    const onceFn = once(fn);

    //assert
    expect(onceFn(1, 2, 3)).toBe(6);

    expect(onceFn(2, 3, 6)).toBeUndefined();
  });

  it("input fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]], return 140", () => {
    // arrange
    const fn = (a: number, b: number, c: number) => a * b * c;

    //act
    const onceFn = once(fn);

    //assert
    expect(onceFn(5, 7, 4)).toBe(140);
    expect(onceFn(2, 3, 6)).toBeUndefined();
  });
});
