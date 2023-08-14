import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import cancellable from "./index";

describe("2725. Interval Cancellation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("case1: should call the function multiple times based on the interval, then cancel further invocations when instructed", () => {
    const fn = vi.fn((x: number) => {
      return x * 2;
    });
    const args = [4];
    const t = 20;
    const cancelT = 110;

    const cancel = cancellable(fn, args, t);

    const cancelSpy = vi.fn(() => cancel());

    setTimeout(cancelSpy, cancelT);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(4);
    expect(fn).toHaveReturnedWith(8);

    vi.runAllTimers();

    expect(fn).toHaveBeenCalledTimes(6);
    expect(fn).toHaveBeenCalledWith(4);
    expect(fn).toHaveReturnedWith(8);
    expect(cancelSpy).toHaveBeenCalled();
  });
  it("case2: should call the function multiple times based on the interval, then cancel further invocations when instructed", () => {
    const fn = vi.fn((x1, x2) => x1 * x2);
    const args = [2, 5];
    const t = 25;
    const cancelT = 140;

    const cancel = cancellable(fn, args, t);
    const cancelSpy = vi.fn(() => cancel());

    setTimeout(cancelSpy, cancelT);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(2, 5);
    expect(fn).toHaveReturnedWith(10);

    vi.runAllTimers();

    expect(fn).toHaveBeenCalledTimes(6);
    expect(fn).toHaveBeenCalledWith(2, 5);
    expect(fn).toHaveReturnedWith(10);
    expect(cancelSpy).toHaveBeenCalled();
  });
  it("case3: should call the function multiple times based on the interval, then cancel further invocations when instructed", () => {
    const fn = vi.fn((x1, x2, x3) => x1 + x2 + x3);
    const args = [5, 1, 3];
    const t = 50;
    const cancelT = 180;

    const cancel = cancellable(fn, args, t);
    const cancelSpy = vi.fn(() => cancel());

    setTimeout(cancelSpy, cancelT);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(5, 1, 3);
    expect(fn).toHaveReturnedWith(9);

    vi.runAllTimers();

    expect(fn).toHaveBeenCalledTimes(4);
    expect(fn).toHaveBeenCalledWith(5, 1, 3);
    expect(fn).toHaveReturnedWith(9);
    expect(cancelSpy).toHaveBeenCalled();
  });
});
