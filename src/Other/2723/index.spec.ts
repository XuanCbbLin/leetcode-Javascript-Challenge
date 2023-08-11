import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import addTwoPromises from "./index";

describe("2723. Add Two Promises", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("Input: promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))，Output: 7", async () => {
    // arrange
    const promise1: Promise<number> = new Promise((resolve) => setTimeout(() => resolve(2), 20));
    const promise2: Promise<number> = new Promise((resolve) => setTimeout(() => resolve(5), 60));

    vi.runAllTimers();

    // act
    const result = await addTwoPromises(promise1, promise2);

    // assert
    expect(result).toBe(7);
  });
  it("Input: promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))，Output: -2", async () => {
    // arrange
    const promise1: Promise<number> = new Promise((resolve) => setTimeout(() => resolve(10), 50));
    const promise2: Promise<number> = new Promise((resolve) => setTimeout(() => resolve(-12), 30));

    vi.runAllTimers();

    // act
    const result = await addTwoPromises(promise1, promise2);

    // assert
    expect(result).toBe(-2);
  });
});
