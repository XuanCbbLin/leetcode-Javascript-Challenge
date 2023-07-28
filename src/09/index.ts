type Fn = (...params: any) => any;

interface Cache {
  [key: string]: number;
}

export default function memoize(fn: Fn): Fn {
  const cache: Cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    cache[key] = fn(...args);

    return cache[key];
  };
}
