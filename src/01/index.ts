export function createHelloWorld() {
  return function (...args: any[]): string {
    return "Hello World";
  };
}

const args = [{}, null, 42];

const f = createHelloWorld();
f(args);
