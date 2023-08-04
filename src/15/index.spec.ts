import { it, describe, expect, afterEach, beforeEach, vi } from "vitest";
import debounce from "./index";

describe("Given a function fn and a time in milliseconds t, return a debounced version of that function.", () => {
  beforeEach(() => {
    // 模擬計時器
    vi.useFakeTimers();
  });
  afterEach(() => {
    // 重置計時器
    vi.restoreAllMocks();
  });
  it('Input: t = 50 calls = [{"t": 50, inputs: [1]},{"t": 75, inputs: [2]}] Output: [{"t": 125, inputs: [2]}]', () => {
    //arrange
    let start = Date.now();
    let result: object[] = [];

    const mock = vi.fn((...inputs: any[]) => {
      result.push({ t: Date.now() - start, inputs });
    });

    // act
    const dlog = debounce(mock, 50);

    setTimeout(() => dlog(1), 50);
    setTimeout(() => dlog(2), 75);

    // 啟動計時器
    vi.runAllTimers();

    // assert
    expect(mock).toHaveBeenCalled();
    expect(JSON.stringify(result)).toBe('[{"t":125,"inputs":[2]}]');
  });
  it('Input: t = 20 calls = [{"t": 50, inputs: [1]},{"t": 100, inputs: [2]}] Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]', () => {
    //arrange
    let start = Date.now();
    let result: object[] = [];

    const mock = vi.fn((...inputs: any[]) => {
      result.push({ t: Date.now() - start, inputs });
    });

    // act
    const dlog = debounce(mock, 20);

    setTimeout(() => dlog(1), 50);
    setTimeout(() => dlog(2), 100);

    // 啟動計時器
    vi.runAllTimers();

    // assert
    expect(mock).toHaveBeenCalled();
    expect(JSON.stringify(result)).toBe('[{"t":70,"inputs":[1]},{"t":120,"inputs":[2]}]');
  });
  it('Input: t = 150 calls = [{"t": 50, inputs: [1, 2]},{"t": 300, inputs: [3, 4]},{"t": 300, inputs: [5, 6]}] [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]', () => {
    //arrange
    let start = Date.now();
    let result: object[] = [];

    const mock = vi.fn((...inputs: any[]) => {
      result.push({ t: Date.now() - start, inputs });
    });

    // act
    const dlog = debounce(mock, 150);

    setTimeout(() => dlog(1, 2), 50);
    setTimeout(() => dlog(3, 4), 300);
    setTimeout(() => dlog(5, 6), 300);

    // 啟動計時器
    vi.runAllTimers();

    // assert
    expect(mock).toHaveBeenCalled();
    expect(JSON.stringify(result)).toBe('[{"t":200,"inputs":[1,2]},{"t":450,"inputs":[5,6]}]');
  });
});
