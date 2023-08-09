import { it, describe, expect } from "vitest";
import expectFn from "./index";

describe("2704. To Be Or Not To Be", () => {
  it("expectFn(5).toBe(5)，Output: true", () => {
    expect(expectFn(5).toBe(5)).toBe(true);
  });
  it('expectFn(5).toBe(null)，Output: "Not Equal"', () => {
    expect(() => expectFn(5).toBe(null)).toThrowError("Not Equal");
  });
  it("expect(5).notToBe(null)，，Output: true", () => {
    expect(expectFn(5).notToBe(null)).toBe(true);
  });
  it("expect(5).notToBe(5)，Output: Equal", () => {
    expect(() => expectFn(5).notToBe(5)).toThrowError("Equal");
  });
});
