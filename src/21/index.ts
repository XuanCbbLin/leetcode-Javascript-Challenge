export default function chunk<T>(arr: T[], size: number): T[][] {
  // Iterative solution
  // const res = [];
  // let subArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   subArr.push(arr[i]);
  //   if (subArr.length === size) {
  //     res.push(subArr);
  //     subArr = [];
  //   }
  // }
  // if (subArr.length) {
  //   res.push(subArr);
  // }
  // return res;

  // Slice solution
  const res = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
}
