# JavaScript Bug: Unexpected NaN and Null Handling

This repository demonstrates a common JavaScript bug related to loose equality (==) comparisons involving `null` and `NaN` values. The original code incorrectly handles these cases, resulting in unexpected behavior.  The solution provides a corrected version that addresses this issue.

## Bug Description

The `foo` function attempts to add two numbers. However, it uses loose equality (`==`) to check for null values. This leads to incorrect results when one of the inputs is `NaN`.  `NaN == null` evaluates to `false`, but the function treats them equivalently when returning 0, leading to unexpected outputs.

## Solution

The solution uses strict equality (`===`) to correctly distinguish between `null`, `NaN`, and other values, ensuring that the addition operation is only performed when both inputs are valid numbers.