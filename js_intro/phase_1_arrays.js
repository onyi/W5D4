Array.prototype.uniq = function() {
  let arr = [];
  this.forEach(function(ele) {
    if (!arr.includes(ele)){
      arr.push(ele);
    }
  });
  return arr;
}

Array.prototype.twoSum = function () {
  let arr = [];
  let base_arr = this;
  this.forEach(function (ele, idx) {
    for (let i = idx+1; i < base_arr.length; i++) {
      if ( (ele + base_arr[i]) === 0){
        arr.push([idx, i]);
      }
    }
  });
  return arr;
}

Array.prototype.transpose = function () {
  let arr = [];
  let base_arr = this;
  
  for (let x = 0; x < this[0].length; x++) {
    let inner = [];
    for (let y = 0; y < this.length; y++) {  
      inner.push(this[y][x]);
    }
    arr.push(inner);
  }
  return arr;
}
