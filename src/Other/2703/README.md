# 2703. Return Length of Arguments Passed

Write a function argumentsLength that returns the count of arguments passed to it.

## Examples


### Example1
```
Input: argsArr = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
```

### Example2
```
Input: argsArr = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
```

## Constraints

- `argsArr is a valid JSON array`
- `0 <= argsArr.length <= 100`