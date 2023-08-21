type Obj = Record<any, any>;

// Recursive Depth-First Search (DFS)

export default function compactObject(obj: Obj): Obj {
  function dfs(obj: any): any {
    if (Boolean(obj) === false) return false;
    if (typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
      const newArr: any[] = [];

      for (let i = 0; i < obj.length; i++) {
        const curr = obj[i];

        const subRes = dfs(curr);

        if (subRes) {
          newArr.push(subRes);
        }
      }

      return newArr;
    }

    const newObj: Obj = {};

    for (const key in obj) {
      const subRes = dfs(obj[key]);
      if (subRes) {
        newObj[key] = subRes;
      }
    }

    return newObj;
  }

  return dfs(obj);
}

// Iterative Depth-First Search

// export default function compactObject(obj: Obj): Obj {
//   const stack: [Obj, Obj][] = [[obj, Array.isArray(obj) ? [] : {}]];
//   let newObj: Obj = stack[0][1];

//   while (stack.length > 0) {
//     const [currObj, newCurrObj] = stack.pop()!;

//     for (const key in currObj) {
//       const val = currObj[key];

//       if (!val) continue;

//       if (typeof val !== "object") {
//         Array.isArray(newCurrObj) ? newCurrObj.push(val) : (newCurrObj[key] = val);
//         continue;
//       }

//       const newSubObj: Obj = Array.isArray(val) ? [] : {};
//       Array.isArray(newCurrObj) ? newCurrObj.push(newSubObj) : (newCurrObj[key] = newSubObj);
//       stack.push([val, newSubObj]);
//     }
//   }

//   return newObj;
// }
