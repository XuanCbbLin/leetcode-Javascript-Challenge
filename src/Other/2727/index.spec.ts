import { describe, expect, it } from "vitest";
import isEmpty from "./index";

describe("isEmpty function", () => {
  it("should return false for an object with key-value pairs", () => {
    const obj = { x: 5, y: 42 };
    expect(isEmpty(obj)).toBe(false);
  });

  it("should return true for an empty object", () => {
    const obj = {};
    expect(isEmpty(obj)).toBe(true);
  });

  it("should return false for an array with elements", () => {
    const obj = [null, false, 0];
    expect(isEmpty(obj)).toBe(false);
  });

  it("should return true for an empty array", () => {
    const obj: [] = [];
    expect(isEmpty(obj)).toBe(true);
  });
});
