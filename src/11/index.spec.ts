import { it, describe, expect } from "vitest";
import sleep from "./index";

describe("Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.", () => {
  it("Input: millis = 100 Output: 100", async () => {
    // arrange
    const millis = 100;
    const t = Date.now();

    // act
    await sleep(millis);
    const time = Date.now() - t;

    // assert
    expect(time).toBeGreaterThanOrEqual(100);
  });
  it("Input: millis = 200 Output: 200", async () => {
    // arrange
    const millis = 200;
    const t = Date.now();

    // act
    await sleep(millis);
    const time = Date.now() - t;

    // assert
    expect(time).toBeGreaterThanOrEqual(200);
  });
});
