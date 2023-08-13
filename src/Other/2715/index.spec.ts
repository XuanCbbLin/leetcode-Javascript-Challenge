import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import cancellable from "./index";

describe("cancellable function", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("should call the function after t milliseconds if not cancelled", () => {
    const fn = vi.fn((x: number) => x * 5);
    const args = [2];
    const t = 20;
    const cancelTime = 50;

    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTime);

    vi.runAllTimers();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(2);
    expect(fn).toHaveReturnedWith(10);
  });
  it("should not call the function if cancelled before t milliseconds", () => {
    const fn = vi.fn((x: number) => x ** 2);
    const args = [2];
    const t = 100;
    const cancelTime = 50;

    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTime);

    vi.runAllTimers();

    expect(fn).not.toHaveBeenCalled();
  });
  it("should handle multiple arguments correctly if not cancelled", () => {
    const fn = vi.fn((x1: number, x2: number) => x1 * x2);
    const args = [2, 4];
    const t = 30;
    const cancelTime = 100;

    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTime);

    vi.runAllTimers();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(2, 4);
    expect(fn).toHaveReturnedWith(8);
  });
});
