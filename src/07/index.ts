type F = (x: number) => number;

export default function compose(functions: F[]): F {
  const arr = functions;

  return function (x) {
    let result = x;
    let length = arr.length;

    for (let i = length - 1; i >= 0; i--) {
      result = arr[i](result);
    }

    return result;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
