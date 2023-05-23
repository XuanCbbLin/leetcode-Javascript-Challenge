export function createCounter(n: number): () => number {
  return function (): number {
    return n++;
  };
}

const counter = createCounter(10);
