export default function isEmpty(obj: Record<string, any> | any[]): boolean {
  //  1. Using JSON.stringify
  if (JSON.stringify(obj).length <= 2) {
    return true;
  } else {
    return false;
  }

  // 2. Using Object.keys
  // function isEmpty(obj: Record<string, any> | any[]): boolean {
  //   return Object.keys(obj).length === 0;
  // }

  // 3. Using loop
  // function isEmpty(obj: Record<string, any> | any[]): boolean {
  //   for (const _ in obj) {
  //     return false;
  //   }
  //   return true;
  // }
}
