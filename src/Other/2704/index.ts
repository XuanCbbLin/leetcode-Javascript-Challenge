type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export default function expectFn(val: any): ToBeOrNotToBe {
  return {
    toBe: (otherVal) => {
      if (otherVal === val) return true;
      throw "Not Equal";
    },
    notToBe: (otherVal) => {
      if (otherVal !== val) return true;
      throw "Equal";
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
