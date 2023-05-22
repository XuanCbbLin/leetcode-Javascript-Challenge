import { describe, it, expect } from "vitest";
import { createHelloWorld } from "./index";

describe("呼叫 createHelloWorld() 回傳 Hello World", () => {
  it("參數傳入 []，回傳 Hello World", () => {
    // arrange
    const expected = "Hello World";
    const args: any[] = [];

    // act
    const actual = createHelloWorld();
    // assert
    expect(actual(args)).toBe(expected);
  });

  it("參數傳入 [{}, null, 42]，回傳 Hello World", () => {
    // arrange
    const args: any[] = [{}, null, 42];
    const expected = "Hello World";
    // act
    const actual = createHelloWorld();
    // assert
    expect(actual(args)).toBe(expected);
  });

  it("不傳入參數，回傳 Hello World", () => {
    // arrange
    const expected = "Hello World";
    // act
    const actual = createHelloWorld();
    // assert
    expect(actual()).toBe(expected);
  });
});
