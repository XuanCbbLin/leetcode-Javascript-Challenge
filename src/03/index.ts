type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export default function createCounter(init: number): ReturnObj {
  const currentCount = init;

  return {
    increment: () => ++init,
    decrement: () => --init,
    reset: () => (init = currentCount),
  };
}
