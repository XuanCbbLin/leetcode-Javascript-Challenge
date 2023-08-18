import { describe, expect, it } from "vitest";
import join from "./index";

describe("Given two arrays arr1 and arr2, return a new array joinedArray", () => {
  it('Input: arr1 = [{"id": 1, "x": 1},{"id": 2, "x": 9}], arr2 = [{"id": 3, "x": 5}]，Output: [{"id": 1, "x": 1},{"id": 2, "x": 9},{"id": 3, "x": 5}]', () => {
    const arr1 = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ];
    const arr2 = [{ id: 3, x: 5 }];
    const joinedArray = join(arr1, arr2);
    expect(joinedArray).toEqual([
      { id: 1, x: 1 },
      { id: 2, x: 9 },
      { id: 3, x: 5 },
    ]);
  });
  it('Input: arr1 = [{"id": 1, "x": 2, "y": 3},{"id": 2, "x": 3, "y": 6}],arr2 = [{"id": 2, "x": 10, "y":20},{"id": 3, "x": 0, "y": 0}]，Output: [{"id": 1, "x": 2, "y": 3},{"id": 2, "x": 10, "y": 20},{"id": 3, "x": 0, "y": 0}]', () => {
    const arr1 = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ];
    const arr2 = [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ];
    const joinedArray = join(arr1, arr2);
    expect(joinedArray).toEqual([
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]);
  });
  it('Input: arr1 = [{"id": 1, "x": 2, "y": 3},{"id": 2, "x": 3, "y": 6}],arr2 = [{"id": 3, "x": 0, "y": 0},{"id": 2, "x": 10, "y":20}]，Output: [{"id": 1, "x": 2, "y": 3},{"id": 2, "x": 10, "y": 20},{"id": 3, "x": 0, "y": 0}]', () => {
    const arr1 = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ];
    const arr2 = [
      { id: 3, x: 0, y: 0 },
      { id: 2, x: 10, y: 20 },
    ];
    const joinedArray = join(arr1, arr2);
    expect(joinedArray).toEqual([
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]);
  });
  it('Input: arr1 = [{"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}] arr2 = [{"id": 1, "b": {"c": 84}, "v":[1, 3]}]，Output: [{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}]', () => {
    const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
    const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
    const joinedArray = join(arr1, arr2);
    expect(joinedArray).toEqual([{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }]);
  });
});
