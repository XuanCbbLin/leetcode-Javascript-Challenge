export default function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  let result: number[] = [];

  arr.forEach((n, i) => {
    if (fn(arr[i], i)) {
      result.push(n);
    }
  });

  return result;
}
