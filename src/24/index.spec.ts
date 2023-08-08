import { it, describe, expect } from "vitest";
import "./index";

describe("2631. Group By", () => {
  it('Input: array = [{"id":"1"},{"id":"1"},{"id":"2"}], fn = function (item) { return item.id; }，Output: { "1": [{"id": "1"}, {"id": "1"}],"2": [{"id": "2"}] }', () => {
    // Arrange
    const array = [{ id: "1" }, { id: "1" }, { id: "2" }];
    const fn = (item: { [key: string]: string }) => item.id;

    // Act
    const result = array.groupBy(fn);

    // Assert
    expect(result).toEqual({
      "1": [{ id: "1" }, { id: "1" }],
      "2": [{ id: "2" }],
    });
  });
  it('Input: array = [[1, 2, 3],[1, 3, 5],[1, 5, 9]], fn = function (list) {return String(list[0]);}，Output: { "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]}', () => {
    // Arrange
    const array = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9],
    ];
    const fn = (list: number[]) => String(list[0]);

    // Act
    const result = array.groupBy(fn);

    // Assert
    expect(result).toEqual({
      "1": [
        [1, 2, 3],
        [1, 3, 5],
        [1, 5, 9],
      ],
    });
  });
  it('Input: array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fn = function (n) { return String(n > 5);}，Output: {"true": [6, 7, 8, 9, 10],"false": [1, 2, 3, 4, 5]}', () => {
    // Arrange
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const fn = (n: number) => String(n > 5);

    // Act
    const result = array.groupBy(fn);

    // Assert
    expect(result).toEqual({
      true: [6, 7, 8, 9, 10],
      false: [1, 2, 3, 4, 5],
    });
  });
});
