Array.prototype.uniq = function() {
  console.log(this);
  arr = [];
  this.forEach(function(ele) {
    if (!arr.includes(ele)){
      arr.push(ele);
    }
  });
  return arr;
}