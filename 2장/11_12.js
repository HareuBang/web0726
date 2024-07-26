const arr = [['a', null], [1, undefined], [NaN, true], ['', 0]];
console.log(arr);

const twoArr = [[],[],[],[]];
for(let i=0; i<4; i++) {
  for(let j=0; j<5; j++) {
    twoArr[i][j] = 1;
  }
}

console.log(twoArr)