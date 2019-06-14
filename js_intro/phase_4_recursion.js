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

function deepDup(arr){
  let dubarr = [];
  for (let i = 0; i < arr.length; i++ ){
    if (arr[i] instanceof Array ){
      dubarr.push(deepDup(arr[i]));
    }else{
      dubarr.push(arr[i]);
    }
  }
  return dubarr;
}

function bsearch(arr, target) {
  if (arr.length === 1) {
    if (arr[0] === target ) {
      return 0;
    } else {
      return -1;
    }
  }

  let mid_index = Math.floor(arr.length / 2);
  if (arr[mid_index] > target) {
    return bsearch(arr.slice(0, mid_index), target);
  } else {
    let right_result = bsearch(arr.slice(mid_index, arr.length), target);
    if (right_result !== -1 ) {
      return mid_index + right_result;
    } else {
      return -1;
    }
  }
}


function mergesort(arr) {

  if (arr.length <= 1) return arr; 

  let index = Math.floor( arr.length / 2 );
  let left = mergesort(arr.slice(0, index));
  let right = mergesort(arr.slice(index, arr.length));

  return mergesort_helper(left, right);
}

function mergesort_helper(left, right){
  let tmparr = [];

  // while( !(left.length === 0 || right.length === 0) ){
  while (!(left.length === 0 || right.length === 0)) {
    if(left[0] > right[0]){
      tmparr.push(right.shift());
    }else{
      tmparr.push(left.shift());
    }
  }

  tmparr = tmparr.concat(left);
  tmparr = tmparr.concat(right);
  return tmparr;
}

function subsets(arr){

}