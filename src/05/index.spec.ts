import { it, describe, expect } from "vitest";
import filter from "./index";

describe("input arr and a filtering function fn， return a new array ", () => {
  it("should return [20, 30] when input [0,10,20,30] and fn is greaterThan10", () => {
    // act
    const input = [0, 10, 20, 30];
    const greaterThan10 = (n: number) => n > 10;
    const output = [20, 30];

    //act
    const result = filter(input, greaterThan10);

    // expect
    expect(result).toStrictEqual(output);
  });

  it("should return [1] when input [1,2,3] and fn is firstIndex", () => {
    // act
    const input = [1, 2, 3];
    const firstIndex = (n: number, i: number) => i === 0;
    const output = [1];

    //act
    const result = filter(input, firstIndex);

    // expect
    expect(result).toStrictEqual(output);
  });

  it("should return [-2,0,1,2] when input [-2,-1,0,1,2] and fn is plusOne", () => {
    // act
    const input = [-2, -1, 0, 1, 2];
    const plusOne = (n: number) => n + 1;
    const output = [-2, 0, 1, 2];

    //act
    const result = filter(input, plusOne);

    // expect
    expect(result).toStrictEqual(output);
  });
});
