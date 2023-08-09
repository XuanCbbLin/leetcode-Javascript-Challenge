import { it, describe, expect } from "vitest";
import argumentsLength from "./index";

describe("Write a function argumentsLength that returns the count of arguments passed to it.", () => {
  it("Input: argsArr = [5]，Output: 1", () => {
    expect(argumentsLength(5)).toBe(1);
  });
  it('Input: argsArr = [{}, null, "3"]，Output: 3', () => {
    expect(argumentsLength({}, null, "3")).toBe(3);
  });
  it("Input: argsArr = [1, 2, 3]，Output: 3", () => {
    expect(argumentsLength(1, 2, 3)).toBe(3);
  });
});
