function foo(a, b) {
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return NaN; // Correctly handles null and NaN values
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // NaN
console.log(foo(1, NaN)); // NaN
console.log(foo(NaN, 2)); // NaN
console.log(foo(NaN, null)); // NaN