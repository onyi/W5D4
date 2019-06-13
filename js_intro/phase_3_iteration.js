Array.prototype.bubbleSort = function () {
  let arr = Array.from(this);

  var sorted = false;
  while (!sorted) {
    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
  }

  return arr;
}



String.prototype.substrings = function () {
  let arr = [];

  for (let i = 0; i < this.length; i++ ) {
    let substr = "";
    for (let j = i; j < this.length; j++ ) {
      substr += this[j];
      arr.push(substr);
    }
  }
  return arr;
}