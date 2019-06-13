function range(start, end){
  let arr = [];
  if (start === end){
    return start;
  }
  if (start > end || end < start){
    return [];
  }
  return [].concat(start, range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + sumRec(arr);
}

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent1(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
    
  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) ** 2;
  } else {
    return base * (exponent2(base, (exp - 1) / 2) ** 2);    
  }
}

function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  var prev_fib = fibonacci(n - 1);
  var last1 = prev_fib[prev_fib.length - 1];
  var last2 = prev_fib[prev_fib.length - 2];
  return prev_fib.concat(last1 + last2 );
}