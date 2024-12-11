# Understanding the Power of Union and Intersection Types in TypeScript

TypeScript's **union** and **intersection** types are powerful tools for creating flexible and robust type definitions. They help developers manage complex data structures while maintaining strong type safety. This guide explains their significance with an example.

---

## Union Types: Flexibility at Its Best

Union types allow a variable to accept values of multiple types, making them ideal for scenarios where inputs or outputs can vary. 

### Example:
```typescript
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

function calculate(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

// Usage:
const circle = { kind: "circle", radius: 5 };
const square = { kind: "square", sideLength: 4 };

console.log(calculate(circle)); // Output: 78.53981633974483
console.log(calculate(square)); // Output: 16
