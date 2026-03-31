// Simple test file

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Simple tests
console.log('Running tests...\n');

console.log('Test add(2, 3):', add(2, 3) === 5 ? 'PASS' : 'FAIL');
console.log('Test subtract(5, 3):', subtract(5, 3) === 2 ? 'PASS' : 'FAIL');
console.log('Test multiply(4, 3):', multiply(4, 3) === 12 ? 'PASS' : 'FAIL');
console.log('Test divide(10, 2):', divide(10, 2) === 5 ? 'PASS' : 'FAIL');

try {
  divide(1, 0);
  console.log('Test divide by zero: FAIL (should have thrown)');
} catch (e) {
  console.log('Test divide by zero:', e.message === 'Cannot divide by zero' ? 'PASS' : 'FAIL');
}

console.log('\nAll tests completed!');
