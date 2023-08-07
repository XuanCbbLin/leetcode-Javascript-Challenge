import { it, describe, expect } from "vitest";
import "./index";

describe("2619. Array Prototype Last", () => {
  it("Input: nums = [null, {}, 3]，Output: 3", () => {
    //arrange
    const nums = [null, {}, 3];

    // act
    const result = nums.last();

    // assert
    expect(result).toBe(3);
  });
  it("Input: nums = []，Output: -1", () => {
    //arrange
    const nums: null[] = [];

    // act
    const result = nums.last();

    // assert
    expect(result).toBe(-1);
  });
});
