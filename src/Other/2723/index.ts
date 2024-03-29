export default async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  const [a, b] = await Promise.all([promise1, promise2]);

  return a + b;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
