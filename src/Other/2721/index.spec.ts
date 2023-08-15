import { describe, expect, it } from "vitest";
import promiseAll from "./index";

describe("2721. Execute Asynchronous Functions in Parallel", () => {
  it("should resolve with a single value when only one function is provided", async () => {
    const functions = [() => new Promise((resolve) => setTimeout(() => resolve(5), 200))];

    await expect(promiseAll(functions)).resolves.toEqual([5]);
  });

  it("should reject with an error when one of the functions rejects", async () => {
    const functions = [
      () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
      () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
    ];

    await expect(promiseAll(functions)).rejects.toThrow("Error");
  });

  it("should resolve with values in order of functions, regardless of resolve time", async () => {
    const functions = [
      () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
      () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
      () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
    ];

    await expect(promiseAll(functions)).resolves.toEqual([4, 10, 16]);
  });

  it("should resolve with an empty array when no functions are provided", async () => {
    const functions: (() => Promise<number[]>)[] = [];

    await expect(promiseAll(functions)).resolves.toEqual([]);
  });
});
