export default function sortBy<T>(arr: T[], fn: Function): T[] {
  arr.sort((a, b) => {
    return fn(a) - fn(b);
  });

  return arr;
}
