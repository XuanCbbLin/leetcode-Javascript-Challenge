import { it, describe, expect } from "vitest";
import chunk from "./index";

describe("Given an array arr and a chunk size size, return a chunked array", () => {
  it("Input: arr = [1,2,3,4,5], size = 1，Output: [[1],[2],[3],[4],[5]]", () => {
    //arrange
    const arr = [1, 2, 3, 4, 5];
    const size = 1;

    // act
    const result = chunk(arr, size);

    // assert
    expect(result).toEqual([[1], [2], [3], [4], [5]]);
  });
  it("Input: arr = [1,9,6,3,2], size = 3，Output: [[1,9,6],[3,2]]", () => {
    //arrange
    const arr = [1, 9, 6, 3, 2];
    const size = 3;

    // act
    const result = chunk(arr, size);

    // assert
    expect(result).toEqual([
      [1, 9, 6],
      [3, 2],
    ]);
  });
  it("Input: arr = [8,5,3,2,6], size = 6，Output: [[8,5,3,2,6]]", () => {
    //arrange
    const arr = [8, 5, 3, 2, 6];
    const size = 6;

    // act
    const result = chunk(arr, size);

    // assert
    expect(result).toEqual([[8, 5, 3, 2, 6]]);
  });
  it("Input: arr = [], size = 1，Output: []", () => {
    //arrange
    const arr: null[] = [];
    const size = 1;

    // act
    const result = chunk(arr, size);

    // assert
    expect(result).toEqual([]);
  });
});
