function foo(a, b) {
  if (a == null || b == null) {
    return 0; // This will cause unexpected behavior if either a or b is NaN
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, NaN)); // NaN (this is fine)
console.log(foo(NaN, 2)); // NaN (this is fine)
console.log(foo(NaN, null)); // 0 (this is unexpected and wrong)