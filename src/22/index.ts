type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
  const res: MultiDimensionalArray = [];

  const helper = (arr: MultiDimensionalArray, depth: number) => {
    for (const val of arr) {
      if (Array.isArray(val) && depth < n) {
        helper(val, depth + 1);
      } else {
        res.push(val);
      }
    }

    return res;
  };

  return helper(arr, 0);
};

export default flat;
