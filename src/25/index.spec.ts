import { it, describe, expect } from "vitest";
import checkIfInstanceOf from "./index";

describe("2618. Check if Object Instance of Class", () => {
  it("Input: func = () => checkIfInstanceOf(new Date(), Date)，Output: true", () => {
    // arrange
    const func = () => checkIfInstanceOf(new Date(), Date);

    // act
    expect(func()).toBe(true);
  });
  it("Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }，Output: true", () => {
    // arrange
    const func = () => {
      class Animal {}
      class Dog extends Animal {}
      return checkIfInstanceOf(new Dog(), Animal);
    };

    // act
    expect(func()).toBe(true);
  });
  it("Input: func = () => checkIfInstanceOf(Date, Date)，Output: false", () => {
    // arrange
    const func = () => checkIfInstanceOf(Date, Date);

    // act
    expect(func()).toBe(false);
  });
  it("Input: func = () => checkIfInstanceOf(5, Number)，Output: true", () => {
    // arrange
    const func = () => checkIfInstanceOf(5, Number);

    // act
    expect(func()).toBe(true);
  });
});
