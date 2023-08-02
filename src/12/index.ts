type Fn = (...params: any[]) => Promise<any>;

export default function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    // Return Promise
    return new Promise(async (resolve, reject) => {
      const id = setTimeout(() => reject("Time Limit Exceeded"), t);

      // method 1
      // fn(...args)
      //   .then((res) => resolve(res))
      //   .catch((err) => reject(err))
      //   .finally(() => clearTimeout(id));

      // method 2
      try {
        const res = await fn(...args);
        resolve(res);
      } catch (err) {
        reject(err);
      } finally {
        clearTimeout(id);
      }
    });
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
