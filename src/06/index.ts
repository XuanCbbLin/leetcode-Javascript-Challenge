type Fn = (accum: number, curr: number) => number;

export default function reduce(nums: number[], fn: Fn, init: number): number {
  let result = init;

  for (let value of nums) {
    result = fn(result, value);
  }

  return result;
}
