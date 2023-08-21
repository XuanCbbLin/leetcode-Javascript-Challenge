import { it, describe, expect } from "vitest";
import compactObject from "./index";

describe("Given an object or array obj, return a compact object", () => {
  it("Input: obj = [null, 0, false, 1]，Output: [1]", () => {
    expect(compactObject([null, 0, false, 1])).toEqual([1]);
  });

  it('Input: obj = {"a": null, "b": [false, 1]}，Output: {"b": [1]}', () => {
    expect(compactObject({ a: null, b: [false, 1] })).toEqual({ b: [1] });
  });

  it("Input: obj = [null, 0, 5, [0], [false, 16]]，Output: [5, [], [16]]", () => {
    expect(compactObject([null, 0, 5, [0], [false, 16]])).toEqual([5, [], [16]]);
  });
});
