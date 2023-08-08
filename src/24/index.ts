declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const result: {
    [key: string]: number[];
  } = {};

  for (const el of this) {
    const key = fn(el);

    result[key] = result[key] || [];
    result[key].push(el);
  }

  return result;
};

export {};
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
