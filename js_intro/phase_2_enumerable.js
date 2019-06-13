Array.prototype.myEach = function (callback) {
    for(let i = 0; i < this.length; i++){
      callback(this[i]);
    }
}

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
}

Array.prototype.myReduce = function (callback, acc) {
  let i = 0;
  if (acc === undefined){
    acc = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    acc = callback(this[i], acc);
  }
  return acc;
}