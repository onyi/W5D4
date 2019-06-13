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