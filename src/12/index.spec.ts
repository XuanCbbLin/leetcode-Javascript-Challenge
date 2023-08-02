import { it, describe, expect } from "vitest";
import timeLimit from "./index";

describe("Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.", () => {
  it('Input: inputs = [5] t = 50 , Output: {"rejected":"Time Limit Exceeded","time":50}', async () => {
    //arrange
    const fn = async (n: number) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };

    const inputs = [5];
    const t = 50;

    // act
    const limited = timeLimit(fn, t);

    const start = performance.now();

    let result;

    try {
      const res = await limited(...inputs);
      result = { resolved: res, time: Math.floor(performance.now() - start) };
    } catch (err) {
      result = { rejected: err, time: Math.floor(performance.now() - start) };
    }

    // assertion
    expect(result.rejected).toBe("Time Limit Exceeded");
    expect(result.time).toBeGreaterThanOrEqual(51);
  });
  it('Input: inputs = [5] t = 150 , Output: {"resolved":25,"time":100}', async () => {
    //arrange
    const fn = async (n: number) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };

    const inputs = [5];
    const t = 150;

    // act
    const limited = timeLimit(fn, t);

    const start = performance.now();

    let result;

    try {
      const res = await limited(...inputs);
      result = { resolved: res, time: Math.floor(performance.now() - start) };
    } catch (err) {
      result = { rejected: err, time: Math.floor(performance.now() - start) };
    }

    // assertion
    expect(result.resolved).toBe(25);
    expect(result.time).toBeLessThan(150);
  });
  it('Input: inputs = [5,10] t = 150, Output: {"resolved":15,"time":120}', async () => {
    //arrange
    const fn = async (a: number, b: number) => {
      await new Promise((res) => setTimeout(res, 120));
      return a + b;
    };

    const inputs = [5, 10];
    const t = 150;

    // act
    const limited = timeLimit(fn, t);

    const start = performance.now();

    let result;

    try {
      const res = await limited(...inputs);
      result = { resolved: res, time: Math.floor(performance.now() - start) };
    } catch (err) {
      result = { rejected: err, time: Math.floor(performance.now() - start) };
    }

    // assertion
    expect(result.resolved).toBe(15);
    expect(result.time).toBeLessThan(150);
  });
  it('Input: inputs = [] t = 1000 Output: {"rejected":"Error","time":0}', async () => {
    //arrange
    const fn = async () => {
      throw "Error";
    };

    const inputs: any[] = [];
    const t = 1000;

    // act
    const limited = timeLimit(fn, t);

    const start = performance.now();

    let result;

    try {
      const res = await limited(...inputs);
      result = { resolved: res, time: Math.floor(performance.now() - start) };
    } catch (err) {
      result = { rejected: err, time: Math.floor(performance.now() - start) };
    }

    // assertion
    expect(result).toMatchObject({ rejected: "Error", time: 0 });
  });
});
