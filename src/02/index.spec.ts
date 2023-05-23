import { describe, it, expect } from "vitest";
import { createCounter } from "./index";

describe("call createCounter()", () => {
  it("n = 10 , return [10,11,12]", () => {
    // arrange
    const expected = [10, 11, 12];
    const n = 10;
    // act
    const actual = createCounter(n);
    // assert
    expect(actual()).toBe(expected[0]);
    expect(actual()).toBe(expected[1]);
    expect(actual()).toBe(expected[2]);
  });

  it("n = -2 , return [-2,-1,0,1,2]", () => {
    // arrange
    const expected = [-2, -1, 0, 1, 2];
    const n = -2;
    // act
    const actual = createCounter(n);
    // assert
    expect(actual()).toBe(expected[0]);
    expect(actual()).toBe(expected[1]);
    expect(actual()).toBe(expected[2]);
    expect(actual()).toBe(expected[3]);
  });
});
