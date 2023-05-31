import { describe, expect, it } from "vitest";
import reduce from "./index";

describe("input an integer array nums, a reducer function fn, and an initial value init,return a reduced array", () => {
  it("input nums = [1,2,3,4], function sum(accum, curr) { return accum + curr; }, output 130 ", () => {
    // arrange
    const nums: number[] = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => {
      return accum + curr;
    };
    const init = 0;

    // act
    const result = reduce(nums, fn, init);

    // assert
    expect(result).toBe(10);
  });

  it("input nums = [1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, output 100 ", () => {
    // arrange
    const nums: number[] = [1, 2, 3, 4];
    const fn = (accum: number, curr: number) => {
      return accum + curr * curr;
    };
    const init = 100;

    // act
    const result = reduce(nums, fn, init);

    // assert
    expect(result).toBe(130);
  });

  it("input nums = [], function sum(accum, curr) { return 0; }, output 25 ", () => {
    // arrange
    const nums: number[] = [];
    const fn = (accum: number, curr: number) => {
      return 0;
    };

    const init = 25;

    // act
    const result = reduce(nums, fn, init);

    // assert
    expect(result).toBe(25);
  });
});
