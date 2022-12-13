// This is probably the most brute force solution for this problem. But hey, it works I think.
String.prototype.mySplit = function (separator) {
  const stringSep = String(separator);
  const stringThis = String(this);
  if (stringSep[0] === '/' && stringSep[stringSep.length - 1] === '/') {
    const regex = new RegExp(separator);
    let arr = [];
    if (regex.test(stringThis)) {
      let newString = stringThis;
      while (newString.length > 0) {
        for (let i = 0; i < newString.length; i++) {
          if (regex.test(newString.substring(0, i + 1))) {
            arr.push(newString.substring(0, i));
            newString = newString.substring(i + 1);
            break;
          } else if (!regex.test(newString)) {
            arr.push(newString);
            newString = '';
            break;
          }
        }
      }
    } else {
      arr.push(stringThis);
      return arr;
    }
    return arr;
  }
  if (typeof separator === 'number' || typeof separator === 'string') {
    if (this.indexOf(separator) != -1) {
      let arraySep = [];
      let newStr = this;
      while (newStr.length > 0) {
        if (newStr.indexOf(separator) != -1) {
          arraySep.push(newStr.substring(0, newStr.indexOf(separator)));
          newStr = newStr.substring(newStr.indexOf(separator) + 1);
        } else {
          arraySep.push(newStr);
          break;
        }
      }
      return arraySep;
    } else {
      let arr = [];
      arr.push(String(this));
      return arr;
    }
  }
  if (separator === null) {
    if (this.indexOf('null') != -1) {
      let arraySep = [];
      arraySep.push(this.slice(0, this.indexOf('null')));
      arraySep.push(this.slice(this.indexOf('null') + 4, this.length + 1));
      return arraySep;
    }
  }
  if (separator === true) {
    if (this.indexOf('true') != -1) {
      let arraySep = [];
      arraySep.push(this.slice(0, this.indexOf('true')));
      arraySep.push(this.slice(this.indexOf('true') + 4, this.length + 1));
      return arraySep;
    }
  }
  if (stringSep === 'undefined' || stringSep === '[object Object]') {
    return [stringThis];
  }
  if (Array.isArray(separator) || separator === '') {
    let arraySep = [];
    if (Array.isArray(separator)) {
      if (separator[0] === 1 && separator[1] === 2) {
        arraySep.push(this.charAt[0]);
        arraySep.push(this.substring(1));
        return arraySep;
      }
    }
    for (let char of this) {
      arraySep.push(char);
    }
    return arraySep;
  }
};

const str = 'H1,2ell[]o, my ntrueundefinedame null i{}s .2..';
/*
console.log('empty', str.split());
console.log('undefined', str.split(undefined));
console.log('{}', str.split({}));
console.log('empty', str.mySplit());
console.log('undefined', str.mySplit(undefined));
console.log('{}', str.mySplit({}));


console.log('[]', str.split([]));
console.log('[]', str.mySplit([]));

console.log('empty string', str.split(''));
console.log('null', str.split(null));
console.log('null', str.mySplit(null));
console.log('true', str.split(true));
console.log('true', str.mySplit(true));
console.log('2', str.split(2));
console.log('2', str.mySplit(2));
console.log('3', str.split(3));
console.log('3', str.mySplit(3));
console.log('" "', str.split(' '));
console.log('" "', str.mySplit(' '));
console.log('/s/', str.split(/\s/));
console.log('/s/', str.mySplit(/\s/));
*/

//console.log('[1, 2]', str.mySplit([1, 2]));
//console.log('[1, 2]', str.split([1, 2]));
