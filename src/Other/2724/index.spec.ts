import { describe, expect, it } from "vitest";
import sortBy from "./index";

describe("Given an array arr and a function fn, return a sorted array sortedArr", () => {
  it("Input: arr = [5, 4, 1, 2, 3], fn = (x) => x，Output: [1, 2, 3, 4, 5]", () => {
    const arr = [5, 4, 1, 2, 3];
    const sortedArr = [1, 2, 3, 4, 5];
    const fn = (x: number) => x;

    const result = sortBy(arr, fn);

    expect(result).toEqual(sortedArr);
  });
  it('Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x，Output: [{"x": -1}, {"x": 0}, {"x": 1}]', () => {
    const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
    const sortedArr = [{ x: -1 }, { x: 0 }, { x: 1 }];
    const fn = (d: { x: number }) => d.x;

    const result = sortBy(arr, fn);

    expect(result).toEqual(sortedArr);
  });
  it("Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]，Output: [[10, 1], [5, 2], [3, 4]]", () => {
    const arr = [
      [3, 4],
      [5, 2],
      [10, 1],
    ];
    const sortedArr = [
      [10, 1],
      [5, 2],
      [3, 4],
    ];
    const fn = (x: number[]) => x[1];

    const result = sortBy(arr, fn);

    expect(result).toEqual(sortedArr);
  });
});
