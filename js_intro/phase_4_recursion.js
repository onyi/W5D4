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