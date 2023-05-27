import { describe, expect, it } from "vitest";
import createCounter from "./index";

describe("input value，return increment/reset/decrement value", () => {
  it("input 5，return [6,5,4]", () => {
    // arrange
    // 準備數據
    const value = 5;

    // act
    // call createCounter
    const counter = createCounter(value);

    // assert
    expect(counter.increment()).toBe(6);
    expect(counter.reset()).toBe(5);
    expect(counter.decrement()).toBe(4);
  });

  it("input 0，return [1,2,1,0,0]", () => {
    // arrange
    // 準備數據
    const value = 0;

    // act
    // call createCounter
    const counter = createCounter(value);

    // assert
    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
    expect(counter.decrement()).toBe(1);
    expect(counter.reset()).toBe(0);
    expect(counter.reset()).toBe(0);
  });
});
